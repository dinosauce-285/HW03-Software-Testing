---
name: gui-usability-audit
description: Run a GUI checklist, heuristic evaluation and cross-platform compatibility matrix against any web screen. Use when asked to audit a page for GUI defects, evaluate it against Nielsen/Shneiderman heuristics, check WCAG contrast and zoom reflow, or capture a browser/OS/device compatibility matrix with identifying overlays.
---

# GUI & Usability Audit

Audits a web screen the way a tester would: measure what a browser can measure, judge what only a human can judge, and keep the two apart.

Built from a real run against EMS — 88 checklist items × 3 screens = 264 verdicts, 7 browser/OS/device combinations × 3 screens = 21 matrix cells.

## When to use this

- "Run the GUI checklist on this screen"
- "Evaluate this page against Nielsen's heuristics"
- "Check this form for accessibility problems"
- "Build a cross-browser compatibility matrix for these screens"

## Core principle

**Never report a verdict you did not obtain.** Every item ends as `Passed`, `Failed` or `N/A` — never blank, never guessed.

- `Failed` requires a **number or a DOM fact** in the Notes column, plus a screenshot
- `N/A` requires a stated reason (the control does not exist on this screen)
- Items needing human judgement are returned as `NEEDS-EYES` with a screenshot attached, **not** silently passed

This matters more than coverage. A checklist with 30 measured verdicts beats one with 90 assumed ones.

## Workflow

### 1 · Scope the screens

Pick screens with forms, validation, dynamic state or upload. A screen that is only a static list produces almost no signal.

For each screen record: name, how to open it, and why it was chosen. Dialogs count as screens — they carry their own semantics (`role="dialog"`, accessible name, focus behaviour) and are usually where the defects are.

### 2 · Run the automated pass

```bash
node scripts/audit.js <url> --out report.md
node scripts/audit.js <url> --dialog "Add User" --submit "Create User" --out report.md
```

`--dialog` opens a dialog by its trigger-button text before auditing, so dialogs are audited as first-class screens. `--submit` makes the script submit the empty form to capture validation behaviour.

The script logs in first if `EMS_USER` / `EMS_PASS` are set in the environment.

It emits a markdown table of verdicts plus screenshots in `evidence/`.

### 3 · Judge the visual items

The script marks items it cannot decide as `NEEDS-EYES` and saves a screenshot for each. Open them and decide. Typical items: visual hierarchy of buttons, spacing consistency, whether an icon reads as its function, whether label wording matches the domain.

Do not skip this step and do not let these stay blank.

### 4 · Group failures into defects

Many cells describe one defect. In the reference run, 25 failed cells collapsed into 10 defects — a missing success toast failed three separate items on three separate screens but is one bug.

Each defect gets: screen · reproduction steps · expected vs actual · severity · screenshot.

### 5 · Rate severity honestly

Nielsen 0–4, decided by **frequency × impact × persistence**:

| | |
|---|---|
| 0 | not a problem |
| 1 | cosmetic — fix if time permits |
| 2 | minor — low priority |
| 3 | major — high priority |
| 4 | catastrophe — must fix before release |

Reserve **4** for defects with no workaround. If the user can still finish the task, it is not a 4.

Write the reason next to the rating. "Severity 3" alone is not a finding; "Severity 3 — happens on every user creation, corrupts stored data, never improves with familiarity" is.

### 6 · Build the compatibility matrix

```bash
node scripts/matrix.js <url> --label "Chrome 149 · Linux · Desktop" --tag "23127262@student.hcmus.edu.vn" --out evidence/
```

Cover **every OS at least once, every browser at least once, every device class at least once — for each screen**. That is a floor of 5 cells per screen, not 5 cells total.

`--tag` stamps an identifying overlay next to the URL so each screenshot proves which environment and which person produced it.

Always record whether a cell ran on a **real device, emulator or simulator**. Emulator results are weaker evidence and hiding that fact makes the whole matrix untrustworthy.

## What the automated pass actually measures

Each check maps to a checklist item ID from `reference/checks.md`.

| Check | Method | Maps to |
|---|---|---|
| Contrast below WCAG 1.4.3 | computed colour of text vs background, relative luminance ratio | `G-12` |
| Reflow at 200 % zoom | `scrollWidth` vs `clientWidth` at a 720 px viewport | `G-13` |
| Breadcrumb present | search for `nav[aria-label*=breadcrumb]`, `.breadcrumb`, ordered-list navigation | `N-03` |
| Required fields marked visibly | count `*` and "required" text against inputs carrying the `required` attribute | `F-02` |
| Labels bound to inputs | every `label[for]` resolves to an existing input `id` | `F-01` |
| Focus after failed submit | `document.activeElement` after submitting an empty form | `F-08` |
| Escape discards typed data | type, press Escape, check the dialog closed and whether any unsaved-changes prompt appeared | `F-12` |
| Dialog accessible name | `[role=dialog]` has a heading plus `aria-labelledby`, or `aria-label` | `G-01` |
| Feedback after a write | after submit, look for `[role=status]`, `[role=alert]`, toast containers | `S-01` |
| Sortable columns | `th[aria-sort]`, clickable `role=columnheader`, sort icons | `MY-03` |
| Page title | non-empty `<title>` distinct from the site name | `G-02` |

**Known limits — state these in the report rather than hiding them:**

- Colours declared in `lab()`, `oklch()` or with alpha compositing cannot be converted reliably. The script counts and reports how many elements it skipped. In the reference run that was 75 elements.
- A label that is visually adjacent but not bound with `for`/`id` looks correct in a screenshot and wrong in the DOM. Always trust the DOM here.
- Absence of a toast within the wait window is not proof one never appears. Raise the wait before reporting a failure.

## Reporting

Return one row per checklist item per screen:

```
| ID | Item | C1 | C2 | C3 | Notes |
```

Then a defect table, then the severity ratings with reasons.

Two rules that keep the numbers trustworthy:

1. **Pass rate excludes `N/A` from the denominator.** `Passed / (Passed + Failed)`. Counting N/A as a pass inflates the result.
2. **Re-count with a command before publishing any figure.** Verdict counts drift as cells are edited. `grep -c` beats memory — a hand-counted total was wrong by 11 cells in the reference run because duplicate keys in the generating script silently shadowed newer verdicts.

## Pairing with user testing

An automated pass finds what is measurably wrong. It does not find what is *experienced* as wrong, and the two diverge.

In the reference run the checklist rated "no confirmation after save" as severity 3. Five real users all said they were certain the save had worked, because the table refreshed in front of them. The rating dropped to 2.

The reverse happened too: no checklist item asked *when* a uniqueness error is reported, only whether the message is clear. Three of five users hit the same wall — the error only appears after submitting all eight fields.

When both methods are available, run both and report where they disagree. That disagreement is the most informative result either method produces.
