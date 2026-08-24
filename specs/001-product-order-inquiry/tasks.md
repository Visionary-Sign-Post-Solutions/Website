# Tasks: Product Order Inquiry Form

**Input**: Design documents from `/specs/001-product-order-inquiry/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/contact-form.md, quickstart.md

**Tests**: No automated test suite exists in the project and TDD was not requested. Production-build and exported-contract validation are included in the polish phase.

**Organization**: Tasks are grouped by user story so each customer outcome remains independently reviewable.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirm the existing static web project is ready for implementation.

- [x] T001 Verify the existing Node/Next.js and universal ignore patterns remain complete in `.gitignore`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the complete build-time submission contract shared by the form stories.

- [x] T002 Add hidden Netlify registration skeletons for the enhanced contact form and existing quote form in `public/__forms.html`

**Checkpoint**: The submission processor can discover every planned field before the visible experience is implemented.

---

## Phase 3: User Story 1 - Submit a Complete Product Request (Priority: P1) 🎯 MVP

**Goal**: Capture an actionable customer and product request with native validation and successful submission behavior.

**Independent Test**: Enter required customer, product, quantity, intended-use, and detail values; optionally add measurements; submit and confirm the established thank-you route receives the request flow.

- [x] T003 [US1] Replace the generic message fields with the complete semantic product-request form and native constraints in `components/ContactForm.jsx`
- [x] T004 [US1] Update contact metadata, hero messaging, request-form heading, instructions, and response expectation in `app/contact/page.jsx`

**Checkpoint**: Customers can provide complete product requirements and submit through the existing contact form.

---

## Phase 4: User Story 2 - Understand What Information to Provide (Priority: P2)

**Goal**: Make the longer form easy to scan, understand, navigate, and complete across device sizes.

**Independent Test**: Review the form at 320 px and 200% zoom, then keyboard through all fields and confirm semantic groups, helper text, required labels, focus indicators, and single-column mobile layout remain clear.

- [x] T005 [US2] Add fieldset, helper-text, dimension-grid, required-marker, action, and responsive styles in `app/globals.css`

**Checkpoint**: The request form is visually organized and remains accessible and usable on desktop and mobile.

---

## Phase 5: User Story 3 - Send a Trustworthy, Spam-Resistant Request (Priority: P3)

**Goal**: Preserve form detection, spam protection, and a clear successful-submission destination.

**Independent Test**: Inspect the production export to confirm matching form names, all field keys, honeypot markup, and the `/thank-you/` action in both visible and registration forms.

- [x] T006 [US3] Align contact and project-quote form names and fields with the Netlify contract in `public/__forms.html`, `components/ContactForm.jsx`, and `app/start-your-project/page.jsx`

**Checkpoint**: Both existing site forms have stable build-time registration and the contact request retains spam and success handling.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Validate the completed feature against its plan and customer outcomes.

- [x] T007 Run the production build and resolve any export failures affecting `out/contact/index.html` and `out/__forms.html`
- [x] T008 Validate exported field parity, responsive markup, and quickstart outcomes, then record any validation notes in `specs/001-product-order-inquiry/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on setup and blocks final submission validation.
- **User Story 1 (Phase 3)**: Depends on the form contract established in Phase 2.
- **User Story 2 (Phase 4)**: Depends on User Story 1 markup so styles can target the final semantic structure.
- **User Story 3 (Phase 5)**: Depends on the implemented form fields and verifies integration with the foundation.
- **Polish (Phase 6)**: Depends on all user-story phases.

### User Story Dependencies

- **User Story 1 (P1)**: Delivers the functional MVP after foundational form registration.
- **User Story 2 (P2)**: Enhances the final User Story 1 markup but can be reviewed separately through responsive and keyboard checks.
- **User Story 3 (P3)**: Audits submission integration after the visible field set is final.

### Parallel Opportunities

- T004 can be completed while T003 is being implemented because it updates a separate page file.
- T007 build output inspection and the manual quickstart review in T008 can be divided after implementation is complete, though T008 must record the final combined result.

---

## Parallel Example: User Story 1

```text
Task T003: Implement product-request fields in components/ContactForm.jsx
Task T004: Update customer-facing contact copy in app/contact/page.jsx
```

---

## Implementation Strategy

### MVP First

1. Verify setup and create the static field contract.
2. Implement User Story 1's complete request form and page messaging.
3. Build and validate the request flow before adding presentation refinements.

### Incremental Delivery

1. **MVP**: Structured product request and native validation.
2. **Usability**: Semantic visual groups, guidance, focus, and responsive behavior.
3. **Reliability**: Final form-registration parity and production export checks.

## Notes

- Every task names the exact file or files it changes or validates.
- Changes to the shared form component and stylesheet run sequentially to avoid same-file conflicts.
- Completed tasks must be marked `[x]` during implementation.
