# Quickstart: Validate Product Order Inquiry Form

## Prerequisites

- Node.js 22 or a version supported by the installed Next.js release
- Project dependencies installed with `npm install`

## Production build

Run:

```powershell
npm run build
```

Expected outcome: the static export completes successfully and writes the contact page, thank-you page, and `__forms.html` into `out/`.

## Contract inspection

Inspect `out/contact/index.html` and `out/__forms.html`.

Expected outcome:

- The visible form name is `contact`, posts to `/thank-you/`, and includes the honeypot.
- Every field in [contracts/contact-form.md](contracts/contact-form.md) is present in the visible form and registration skeleton.
- The project-quote form remains registered in `out/__forms.html`.

## Browser validation scenario

1. Run `npm run dev` and open `/contact/`.
2. Attempt submission with all fields empty.
3. Enter a malformed email, quantity `0`, and a negative dimension.
4. Correct required values, leave optional dimensions blank, and submit only in an environment configured to receive Netlify Forms.

Expected outcome: native validation identifies invalid controls, valid optional omissions are accepted, and successful production submission routes to `/thank-you/`.

## Responsive and accessibility scenario

1. Check the page at 320 px viewport width and at 200% browser zoom.
2. Navigate from the first control through submit using only Tab and Shift+Tab.
3. Inspect labels, legends, helper text, and required indicators.

Expected outcome: no page-level horizontal scrolling, groups remain understandable, focus is always visible, and focus order matches reading order.

## Validation results — 2026-08-24

- Production build passed with Next.js 16.3.0 and generated all eight static pages.
- `out/contact/index.html` contains every contact field registered in `out/__forms.html`; no registered contact field is missing from the visible form.
- The exported form preserves `contact`, `/thank-you/`, `bot-field`, quantity minimum/step constraints, and non-negative decimal dimension constraints.
- Desktop browser review found four correctly named form groups, 17 labeled data controls, and the submit control.
- At a 320-pixel viewport, document width stayed within the viewport, every visible control stayed in bounds, dimensions collapsed to one column, and the form actions stacked vertically.
- Focusing the name field displayed the configured 3-pixel violet focus ring.
