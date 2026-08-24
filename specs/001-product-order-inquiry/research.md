# Research: Product Order Inquiry Form

## Decision 1: Preserve native form submission

- **Decision**: Continue using a semantic HTML POST form with the existing contact form name, honeypot field, and thank-you action.
- **Rationale**: Native submission works without client-side JavaScript, preserves browser validation and accessibility behavior, and matches the static deployment architecture.
- **Alternatives considered**: AJAX submission was rejected because it adds client-side state, failure handling, and routing complexity without improving the requested workflow.

## Decision 2: Add a static form-registration skeleton

- **Decision**: Add `public/__forms.html` containing hidden field definitions for the contact form and the existing project-quote form.
- **Rationale**: A static, framework-independent registration file gives Netlify's build parser a stable declaration of every accepted field. Including both existing forms prevents the new registration asset from overlooking the site's second form.
- **Alternatives considered**: Relying only on framework-rendered page output was rejected because form detection can vary by framework/build behavior and a missing field contract can cause silently incomplete submissions.

## Decision 3: Use semantic groups and native constraints

- **Decision**: Organize the form with `fieldset` and `legend`, persistent labels, helper text, native required/type/min/step attributes, and autocomplete or input-mode hints.
- **Rationale**: These browser-native features improve comprehension, keyboard and assistive-technology navigation, mobile keyboards, and error prevention without adding JavaScript or a validation dependency.
- **Alternatives considered**: A multi-step wizard was rejected because the request is short enough for one page and a wizard would add navigation state and make review harder. Custom JavaScript validation was rejected because native constraints cover the defined rules.

## Decision 4: Treat detailed specifications as optional

- **Decision**: Require product type, quantity, intended use, and request details, while keeping exact dimensions, material, finish, timeline, and location optional.
- **Rationale**: Customers often begin an inquiry before specifications are final. Blocking those requests would increase abandonment, while the required contextual fields still provide enough information for a useful follow-up.
- **Alternatives considered**: Requiring all measurements was rejected because it excludes legitimate early-stage requests. A single unstructured size field was rejected because separate measurements and units produce clearer submissions.

## Decision 5: Keep one primary product per submission

- **Decision**: Capture structured details for one primary product and direct customers to describe additional products in the request-details field.
- **Rationale**: This keeps the form quick and works with native static form processing. It also covers mixed requests without dynamic repeated-field UI.
- **Alternatives considered**: Dynamically adding multiple product rows was rejected for this iteration because repeated keys, client-side controls, and validation would materially increase complexity.

## Decision 6: Do not add file upload in this iteration

- **Decision**: Keep artwork and reference-file upload out of scope and invite customers to describe what they have.
- **Rationale**: Uploads introduce file-size, supported-format, privacy, and error-handling requirements that are unnecessary for capturing the user's requested order details.
- **Alternatives considered**: A single attachment field was deferred until the business defines accepted formats and handling expectations.

## Post-Design Constitution Re-check

The design remains within the repository's static architecture, adds no dependencies, preserves progressive enhancement, and introduces no constitution violation.
