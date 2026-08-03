#!/usr/bin/env node
/**
 * GUI checklist audit — runs the measurable subset of a GUI/usability checklist
 * against one screen and emits a markdown verdict table.
 *
 *   node audit.js <url> [--dialog "Add User"] [--submit "Create User"]
 *                       [--out report.md] [--evidence ./evidence] [--headed]
 *
 * Login is attempted automatically when EMS_USER and EMS_PASS are set.
 *
 * Every check returns Passed | Failed | N/A | NEEDS-EYES.
 * Nothing is ever left blank, and NEEDS-EYES always carries a screenshot.
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------------- arguments
const argv = process.argv.slice(2);
const url = argv.find(a => a.startsWith('http'));
const flag = (name, fallback = null) => {
  const i = argv.indexOf('--' + name);
  return i === -1 ? fallback : (argv[i + 1] || true);
};
if (!url) {
  console.error('usage: node audit.js <url> [--dialog "Add User"] [--submit "Create User"]');
  process.exit(1);
}
const OPEN_DIALOG = flag('dialog');
const SUBMIT_LABEL = flag('submit');
const OUT = flag('out', 'audit-report.md');
const EVIDENCE = flag('evidence', './evidence');
const HEADED = argv.includes('--headed');

fs.mkdirSync(EVIDENCE, { recursive: true });

const results = [];
const record = (id, item, verdict, notes) => {
  results.push({ id, item, verdict, notes });
  const mark = { Passed: 'PASS', Failed: 'FAIL', 'N/A': ' n/a', 'NEEDS-EYES': 'EYES' }[verdict];
  console.log(`${mark}  ${id.padEnd(6)} ${item}`);
};

// ------------------------------------------------------------------ helpers
const luminance = ([r, g, b]) => {
  const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const contrast = (a, b) => {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};
const parseRgb = s => {
  const m = /^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/.exec(s || '');
  if (!m) return null;                       // lab(), oklch(), colour keywords: not convertible here
  if (m[4] !== undefined && parseFloat(m[4]) < 0.95) return null;  // translucent: composite unknown
  return [+m[1], +m[2], +m[3]];
};

// --------------------------------------------------------------------- main
(async () => {
  const browser = await chromium.launch({ headless: !HEADED });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const shot = async name => {
    const file = path.join(EVIDENCE, `${name}.png`);
    await page.screenshot({ path: file, fullPage: false });
    return file;
  };

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  // optional login
  if (process.env.EMS_USER && await page.$('input[type=password]')) {
    await page.fill('input[type=email], input[name=email]', process.env.EMS_USER);
    await page.fill('input[type=password]', process.env.EMS_PASS || '');
    await page.click('button[type=submit]');
    await page.waitForTimeout(3000);
    if (!page.url().startsWith(url)) await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1500);
  }

  // ---------------------------------------------------- G-02  page title
  const title = await page.title();
  record('G-02', 'Page has a meaningful title',
    title && title.trim().length > 3 ? 'Passed' : 'Failed',
    `<title> = ${JSON.stringify(title)}`);

  // ---------------------------------------------------- N-03  breadcrumb
  const crumb = await page.evaluate(() => !!document.querySelector(
    'nav[aria-label*="readcrumb"], .breadcrumb, [class*="breadcrumb"], ol[itemtype*="BreadcrumbList"]'));
  record('N-03', 'Breadcrumb shows where the user is',
    crumb ? 'Passed' : 'Failed',
    crumb ? 'breadcrumb element found' : 'no breadcrumb element at any level');

  // ---------------------------------------------------- G-12  contrast
  const cs = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll('button, a, th, label, h1, h2, h3, span, p')) {
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8 || !el.textContent.trim()) continue;
      const s = getComputedStyle(el);
      let bg = s.backgroundColor, node = el;
      while (bg === 'rgba(0, 0, 0, 0)' && node.parentElement) {
        node = node.parentElement; bg = getComputedStyle(node).backgroundColor;
      }
      out.push({
        text: el.textContent.trim().slice(0, 30),
        fg: s.color, bg,
        size: parseFloat(s.fontSize), weight: s.fontWeight,
      });
    }
    return out;
  });
  let skipped = 0;
  const lowContrast = [];
  for (const c of cs) {
    const fg = parseRgb(c.fg), bg = parseRgb(c.bg);
    if (!fg || !bg) { skipped++; continue; }
    const large = c.size >= 24 || (c.size >= 18.66 && +c.weight >= 700);
    const need = large ? 3 : 4.5;
    const ratio = contrast(fg, bg);
    if (ratio < need) lowContrast.push(`"${c.text}" ${ratio.toFixed(2)}:1 (cần ${need})`);
  }
  record('G-12', 'Text contrast meets WCAG 1.4.3',
    lowContrast.length ? 'Failed' : 'Passed',
    lowContrast.length
      ? `${lowContrast.length} phần tử dưới ngưỡng: ${lowContrast.slice(0, 4).join(' · ')}` +
        (skipped ? ` — **${skipped} phần tử không đo được** (màu khai bằng lab()/oklch() hoặc nền trong suốt)` : '')
      : `mọi phần tử đo được đều đạt${skipped ? ` — ${skipped} phần tử không đo được` : ''}`);
  if (lowContrast.length) await shot('G-12-contrast');

  // ---------------------------------------------------- G-13  reflow @200%
  await page.setViewportSize({ width: 720, height: 900 });
  await page.waitForTimeout(800);
  const reflow = await page.evaluate(() => ({
    scroll: document.documentElement.scrollWidth,
    client: document.documentElement.clientWidth,
  }));
  const overflow = reflow.scroll - reflow.client;
  record('G-13', 'No horizontal overflow at 200% zoom',
    overflow > 8 ? 'Failed' : 'Passed',
    `scrollWidth ${reflow.scroll} vs clientWidth ${reflow.client}` +
    (overflow > 8 ? ` — tràn ${overflow}px` : ''));
  if (overflow > 8) await shot('G-13-zoom200');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(600);

  // ---------------------------------------------------- MY-03  sortable columns
  const table = await page.$('table');
  if (!table) {
    record('MY-03', 'Data table can be sorted by key columns', 'N/A', 'màn hình không có bảng dữ liệu');
  } else {
    const sortable = await page.evaluate(() => {
      const th = [...document.querySelectorAll('th, [role=columnheader]')];
      return th.filter(h => h.getAttribute('aria-sort') || h.querySelector('svg, [class*=sort]') ||
                            getComputedStyle(h).cursor === 'pointer').length;
    });
    record('MY-03', 'Data table can be sorted by key columns',
      sortable > 0 ? 'Passed' : 'Failed',
      sortable > 0 ? `${sortable} cột sắp xếp được` : 'không cột nào có aria-sort, icon sắp xếp hay con trỏ bấm được');
  }

  // ---------------------------------------------------- open dialog if asked
  let scope = page;
  if (OPEN_DIALOG) {
    const trigger = page.locator(`button:has-text("${OPEN_DIALOG}")`).first();
    await trigger.click();
    await page.waitForSelector('[role=dialog]', { timeout: 10000 });
    await page.waitForTimeout(900);
    scope = page.locator('[role=dialog]').first();
  }

  // ---------------------------------------------------- G-01  dialog accessible name
  if (!OPEN_DIALOG) {
    record('G-01', 'Dialog has an accessible name', 'N/A', 'không mở dialog nào trong lần chạy này');
  } else {
    const named = await page.evaluate(() => {
      const d = document.querySelector('[role=dialog]');
      if (!d) return null;
      return {
        heading: !!d.querySelector('h1,h2,h3,h4'),
        labelledby: !!d.getAttribute('aria-labelledby'),
        label: !!d.getAttribute('aria-label'),
      };
    });
    const ok = named && (named.label || (named.heading && named.labelledby));
    record('G-01', 'Dialog has an accessible name', ok ? 'Passed' : 'Failed',
      `heading=${named.heading} · aria-labelledby=${named.labelledby} · aria-label=${named.label}` +
      (ok ? '' : ' — trình đọc màn hình chỉ đọc "dialog"'));
    if (!ok) await shot('G-01-dialog-name');
  }

  // ---------------------------------------------------- F-01  labels bound to inputs
  const labels = await scope.evaluate(root => {
    const r = root.querySelectorAll ? root : document;
    const inputs = [...r.querySelectorAll('input:not([type=hidden]), select, textarea')];
    let bound = 0;
    for (const i of inputs) {
      const byFor = i.id && r.querySelector(`label[for="${CSS.escape(i.id)}"]`);
      if (byFor || i.closest('label') || i.getAttribute('aria-label') || i.getAttribute('aria-labelledby')) bound++;
    }
    return { total: inputs.length, bound };
  });
  record('F-01', 'Every input is bound to a label',
    labels.total === 0 ? 'N/A' : labels.bound === labels.total ? 'Passed' : 'Failed',
    labels.total === 0 ? 'màn hình không có ô nhập'
      : `${labels.bound}/${labels.total} ô có nhãn gắn đúng (for/id, bọc trong label, hoặc aria-label)`);

  // ---------------------------------------------------- F-02  required marked visibly
  const req = await scope.evaluate(root => {
    const r = root.querySelectorAll ? root : document;
    const required = r.querySelectorAll('[required], [aria-required=true]').length;
    const stars = (r.textContent.match(/\*/g) || []).length;
    return { required, stars, hint: /bắt buộc|required/i.test(r.textContent) };
  });
  record('F-02', 'Required fields are visibly marked before submit',
    req.required === 0 ? 'N/A' : (req.stars > 0 || req.hint) ? 'Passed' : 'Failed',
    req.required === 0 ? 'không có trường bắt buộc'
      : `${req.required} trường required trong HTML · dấu "*" xuất hiện ${req.stars} lần · chữ "bắt buộc/required" ${req.hint ? 'có' : 'không có'}`);

  // ---------------------------------------------------- F-12  Escape discards data
  if (OPEN_DIALOG) {
    const first = scope.locator('input:not([type=hidden])').first();
    await first.fill('AUDIT-PROBE-DO-NOT-SAVE');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(700);
    const state = await page.evaluate(() => ({
      open: !!document.querySelector('[role=dialog]'),
      warned: /unsaved|discard|chưa lưu|huỷ bỏ|hủy bỏ/i.test(document.body.innerText),
    }));
    record('F-12', 'Escape does not silently discard typed data',
      !state.open && !state.warned ? 'Failed' : 'Passed',
      state.open ? 'dialog vẫn mở sau Escape'
        : state.warned ? 'có cảnh báo dữ liệu chưa lưu'
        : 'dialog đóng thẳng, mất dữ liệu đã nhập, không cảnh báo');
    if (!state.open && !state.warned) await shot('F-12-escape');
    if (!state.open) {                       // reopen for the remaining checks
      await page.locator(`button:has-text("${OPEN_DIALOG}")`).first().click();
      await page.waitForSelector('[role=dialog]', { timeout: 10000 });
      await page.waitForTimeout(800);
      scope = page.locator('[role=dialog]').first();
    }
  } else {
    record('F-12', 'Escape does not silently discard typed data', 'N/A', 'không có dialog để kiểm');
  }

  // ---------------------------------------------------- F-08 / S-01  submit behaviour
  if (SUBMIT_LABEL) {
    await page.locator(`button:has-text("${SUBMIT_LABEL}")`).first().click();
    await page.waitForTimeout(1600);

    const focused = await page.evaluate(() => {
      const a = document.activeElement;
      return { tag: a.tagName, type: a.getAttribute('type'), isField: /INPUT|SELECT|TEXTAREA/.test(a.tagName) };
    });
    record('F-08', 'Focus moves to the first field in error after a failed submit',
      focused.isField ? 'Passed' : 'Failed',
      `document.activeElement = ${focused.tag}${focused.type ? `[${focused.type}]` : ''}` +
      (focused.isField ? '' : ' — focus vẫn ở nút submit, người dùng bàn phím phải Tab ngược'));
    if (!focused.isField) await shot('F-08-focus');

    const feedback = await page.evaluate(() => !!document.querySelector(
      '[role=status], [role=alert], [class*=toast], [data-sonner-toast], [class*=snackbar]'));
    record('S-01', 'System confirms the outcome of a write action',
      feedback ? 'Passed' : 'Failed',
      feedback ? 'tìm thấy vùng thông báo' : 'không có toast, không có [role=status], không có [role=alert]');
    if (!feedback) await shot('S-01-no-feedback');
  } else {
    record('F-08', 'Focus moves to the first field in error after a failed submit', 'N/A', 'không chạy submit trong lần này');
    record('S-01', 'System confirms the outcome of a write action', 'N/A', 'không chạy submit trong lần này');
  }

  // ---------------------------------------------------- items needing human eyes
  const overview = await shot('overview');
  for (const [id, item] of [
    ['G-06', 'Primary and secondary actions are visually distinguishable'],
    ['G-05', 'Spacing and alignment are consistent across the screen'],
    ['S-07', 'Destructive actions are not the most prominent button'],
    ['N-17', 'Icons read as their function without a tooltip'],
  ]) record(id, item, 'NEEDS-EYES', `xem \`${overview}\` rồi tự chấm`);

  // ------------------------------------------------------------------ report
  const n = v => results.filter(r => r.verdict === v).length;
  const rate = (n('Passed') + n('Failed')) ? (100 * n('Passed') / (n('Passed') + n('Failed'))).toFixed(1) : '—';

  const md = [
    `# GUI audit — ${url}`,
    '',
    `Chạy lúc ${new Date().toISOString()}${OPEN_DIALOG ? ` · dialog **${OPEN_DIALOG}**` : ''}`,
    '',
    `**${n('Passed')} Passed · ${n('Failed')} Failed · ${n('N/A')} N/A · ${n('NEEDS-EYES')} cần mắt người** — tỉ lệ pass **${rate} %**`,
    '',
    '> Tỉ lệ pass = Passed / (Passed + Failed) — N/A không tính vào mẫu số.',
    '> Mục `NEEDS-EYES` **chưa có kết luận**; phải tự chấm từ ảnh trước khi nộp.',
    '',
    '| ID | Mục kiểm tra | Kết quả | Notes |',
    '|---|---|---|---|',
    ...results.map(r => `| \`${r.id}\` | ${r.item} | **${r.verdict}** | ${r.notes} |`),
    '',
  ].join('\n');

  fs.writeFileSync(OUT, md);
  console.log(`\n${n('Passed')} Passed · ${n('Failed')} Failed · ${n('N/A')} N/A · ${n('NEEDS-EYES')} cần mắt người`);
  console.log(`báo cáo: ${OUT}   ảnh: ${EVIDENCE}/`);
  await browser.close();
})().catch(e => { console.error('lỗi:', e.message); process.exit(1); });
