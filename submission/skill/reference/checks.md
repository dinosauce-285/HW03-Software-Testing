# Check reference — what is measurable, what is not

Maps each automated check to the checklist item it satisfies, the exact method used, and the failure mode that method has. Read the third column before trusting a verdict.

## IA-01 — General UI

| ID | Item | Method | How this method can be wrong |
|---|---|---|---|
| `G-01` | Dialog has an accessible name | `[role=dialog]` must have `aria-label`, or a heading plus `aria-labelledby` | A dialog whose title is a styled `<div>` looks perfect in a screenshot and fails here. Trust the DOM. |
| `G-02` | Page has a meaningful title | non-empty `<title>` longer than 3 characters | Cannot tell a *meaningful* title from a generic one. A page titled "App" passes. |
| `G-05` | Spacing and alignment consistent | **not automatable** → `NEEDS-EYES` | — |
| `G-06` | Primary vs secondary actions distinguishable | **not automatable** → `NEEDS-EYES` | — |
| `G-12` | Text contrast meets WCAG 1.4.3 | computed `color` vs resolved background, relative luminance ratio, 4.5:1 (3:1 for large text) | Colours declared in `lab()` / `oklch()`, or backgrounds with alpha, cannot be resolved. The script **counts and reports** how many it skipped — a clean pass with 75 skipped elements is not a clean pass. |
| `G-13` | No horizontal overflow at 200 % zoom | `scrollWidth` vs `clientWidth` at a 720 px viewport | Resizing the viewport is not identical to browser zoom; text rendering differs slightly. Good enough to catch real overflow, not for sub-10 px differences. |

## IA-02 — Forms

| ID | Item | Method | How this method can be wrong |
|---|---|---|---|
| `F-01` | Every input is bound to a label | `label[for]` resolving to an input `id`, or an input wrapped in a label, or `aria-label` | This is the check most likely to disagree with a screenshot. Visible text next to a field is **not** a bound label. In the reference run this produced a false "missing label" until the distinction was made explicit. |
| `F-02` | Required fields visibly marked | count `*` and "required"/"bắt buộc" text against elements carrying `required` | A form that marks required fields with colour alone fails here — correctly, since colour alone is not accessible. |
| `F-08` | Focus moves to the first field in error | `document.activeElement` after submitting an empty form | Only meaningful when the submit actually fails validation. If the form submits successfully, the verdict is meaningless — the script only runs this with `--submit`. |
| `F-12` | Escape does not silently discard data | type into a field, press Escape, check whether the dialog closed and whether any unsaved-changes text appeared | Searches for wording in several languages. A prompt with unusual wording could be missed — read the screenshot before filing this as a defect. |

## IA-03 — Navigation

| ID | Item | Method | How this method can be wrong |
|---|---|---|---|
| `N-03` | Breadcrumb shows location | `nav[aria-label*=breadcrumb]`, `.breadcrumb`, `BreadcrumbList` | A breadcrumb built from unlabelled divs would be missed. Confirm visually before reporting a failure. |
| `N-17` | Icons read as their function | **not automatable** → `NEEDS-EYES` | — |
| `MY-03` | Data table sortable by key columns | `th[aria-sort]`, clickable `role=columnheader`, sort icon, pointer cursor | Sorting implemented purely in a hidden menu would be missed. |

## IA-04 — Feedback and state

| ID | Item | Method | How this method can be wrong |
|---|---|---|---|
| `S-01` | System confirms a write action | after submit, look for `[role=status]`, `[role=alert]`, `[class*=toast]`, `[data-sonner-toast]` | **Absence within the wait window is not proof of absence.** A toast appearing after the timeout reads as a failure. Raise the wait before filing this. |
| `S-07` | Destructive action is not the most prominent button | **not automatable** → `NEEDS-EYES` | — |

## Items no script should attempt

These need a person. Returning them as `NEEDS-EYES` with a screenshot is the correct output — silently passing them is the failure mode this reference exists to prevent.

- Whether wording matches the user's vocabulary rather than the developer's
- Whether visual hierarchy directs attention to the right action
- Whether an error message tells the user what to **do**, not just what went wrong
- Whether the flow makes sense as a sequence, not just as separate screens
- Whether an empty state teaches a first-time user what to do next

## Extending the checklist

When adding a check, decide first whether it is measurable **at all**. The three checks added during the reference run (`MY-01` label binding, `MY-02` dialog accessible name, `MY-03` sortable columns) all came from the same source: running the checklist through the DOM instead of by eye. Every one of them failed on every screen it applied to — a whole class of defects invisible to visual review.

That is the productive place to look for new items: **where the eye and the DOM disagree.**
