# Implementation Plan: Product Order Inquiry Form

**Branch**: `001-product-order-inquiry` | **Date**: 2026-08-24 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-product-order-inquiry/spec.md`

## Summary

Replace the contact page's generic message form with a guided product-request experience that captures customer details, product type, quantity, optional measurements, intended use, and project context. Keep the site's static Next.js architecture and Netlify Forms delivery, introduce semantic field groups and accessible native validation, register the complete form contract in a static detection file, and extend the shared styles for a clear responsive layout.

## Technical Context

**Language/Version**: JavaScript (ECMAScript modules), JSX, CSS; Node.js 22 in deployment

**Primary Dependencies**: Next.js 16.3.0, React 19.2.8, React DOM 19.2.8, Netlify Forms

**Storage**: Netlify Forms submission storage; no application database

**Testing**: Production `next build`, exported-HTML inspection, browser/native constraint validation, keyboard and responsive manual checks

**Target Platform**: Modern desktop and mobile browsers; static hosting on Netlify

**Project Type**: Statically exported web application

**Performance Goals**: No additional client-side runtime or network request before submission; form remains immediately interactive after page load

**Constraints**: Preserve `output: 'export'`, current thank-you route, form name, honeypot protection, and visual design system; no server runtime or sensitive payment collection

**Scale/Scope**: One contact-page form, one build-time form-registration skeleton, shared form CSS, and supporting specification artifacts

## Constitution Check

*GATE: Passed before Phase 0 research and re-checked after Phase 1 design.*

The project constitution is an unratified placeholder and defines no enforceable gates. The plan therefore applies the repository's established constraints: static export, minimal dependencies, progressive enhancement, accessible defaults, and reuse of shared styles. No exception or added architectural layer is required.

## Project Structure

### Documentation (this feature)

```text
specs/001-product-order-inquiry/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── contact-form.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── contact/page.jsx       # Contact-page content and form presentation
├── globals.css            # Shared responsive and accessible form styles
└── thank-you/page.jsx     # Existing successful-submission destination

components/
└── ContactForm.jsx        # Product-request form markup and validation attributes

public/
└── __forms.html           # Static build-time Netlify form registration
```

**Structure Decision**: Retain the existing single Next.js application and enhance the existing contact component. No backend, state layer, or new package is needed because submission processing is already provided by Netlify Forms.

## Complexity Tracking

No constitution violations or complexity exceptions are required.
