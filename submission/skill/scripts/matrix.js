#!/usr/bin/env node
/**
 * Compatibility-matrix capture — screenshots one screen in one environment and
 * stamps an identifying overlay so the image proves who produced it and where.
 *
 *   node matrix.js <url> --label "Chrome 149 · Linux · Desktop" \
 *                        --tag "23127262@student.hcmus.edu.vn" \
 *                        --device "Galaxy S24" --out ./evidence
 *
 * --device switches to a Playwright device profile (phone/tablet emulation).
 * Run once per cell of the matrix. Cover every OS, browser and device class
 * at least once FOR EACH SCREEN — a floor of 5 cells per screen, not 5 total.
 */

const { chromium, firefox, webkit, devices } = require('playwright');
const fs = require('fs');
const path = require('path');

const argv = process.argv.slice(2);
const url = argv.find(a => a.startsWith('http'));
const flag = (n, d = null) => { const i = argv.indexOf('--' + n); return i === -1 ? d : argv[i + 1]; };
if (!url) {
  console.error('usage: node matrix.js <url> --label "Chrome 149 · Linux · Desktop" --tag "<mssv email>"');
  process.exit(1);
}
const LABEL = flag('label', 'unknown environment');
const TAG = flag('tag', '');
const DEVICE = flag('device');
const ENGINE = flag('engine', 'chromium');
const OUT = flag('out', './evidence');
const NAME = flag('name', LABEL.replace(/[^a-z0-9]+/gi, '-').toLowerCase());

fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const engine = { chromium, firefox, webkit }[ENGINE];
  if (!engine) { console.error(`engine không hợp lệ: ${ENGINE}`); process.exit(1); }

  const browser = await engine.launch({ headless: false });
  const profile = DEVICE ? devices[DEVICE] : { viewport: { width: 1440, height: 900 } };
  if (DEVICE && !profile) {
    console.error(`không có device profile "${DEVICE}" — xem playwright.devices`);
    process.exit(1);
  }
  const ctx = await browser.newContext(profile);
  const page = await ctx.newPage();

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  if (process.env.EMS_USER && await page.$('input[type=password]')) {
    await page.fill('input[type=email], input[name=email]', process.env.EMS_USER);
    await page.fill('input[type=password]', process.env.EMS_PASS || '');
    await page.click('button[type=submit]');
    await page.waitForTimeout(4000);
    if (!page.url().startsWith(url)) await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);
  }

  // Overlay is injected into the page rather than composited afterwards, so it
  // sits in the same screenshot as the URL bar content and cannot be added later.
  await page.evaluate(({ label, tag, ua }) => {
    const bar = document.createElement('div');
    bar.style.cssText = [
      'position:fixed', 'inset:0 0 auto 0', 'z-index:2147483647',
      'background:#111', 'color:#fff', 'font:12px/1.5 monospace',
      'padding:6px 10px', 'display:flex', 'gap:14px', 'flex-wrap:wrap',
      'border-bottom:2px solid #f43f5e', 'pointer-events:none',
    ].join(';');
    const cell = (k, v) => `<span><b style="color:#f43f5e">${k}</b> ${v}</span>`;
    bar.innerHTML =
      cell('URL', location.href) +
      cell('ENV', label) +
      (tag ? cell('MSSV', tag) : '') +
      cell('UA', ua.slice(0, 60)) +
      cell('VIEWPORT', `${innerWidth}×${innerHeight}`);
    document.body.prepend(bar);
    document.documentElement.style.scrollPaddingTop = '40px';
  }, { label: LABEL, tag: TAG, ua: await page.evaluate(() => navigator.userAgent) });

  await page.waitForTimeout(400);
  const file = path.join(OUT, `${NAME}.png`);
  await page.screenshot({ path: file, fullPage: false });

  console.log(`đã chụp: ${file}`);
  console.log(`  môi trường : ${LABEL}`);
  console.log(`  thiết bị   : ${DEVICE || 'desktop 1440×900'}`);
  console.log(`  loại       : ${DEVICE ? 'EMULATOR — phải ghi rõ trong ma trận' : 'real browser trên máy thật'}`);
  await browser.close();
})().catch(e => { console.error('lỗi:', e.message); process.exit(1); });
