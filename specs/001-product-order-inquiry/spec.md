# Feature Specification: Product Order Inquiry Form

**Feature Branch**: `main`

**Created**: 2026-08-24

**Status**: Implemented

**Input**: User description: "Update the contact page so customers can provide more information about the products they want to order, including size, quantity, dimensions, and intended use, using good web-design practices that make the request easy to submit."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Submit a Complete Product Request (Priority: P1)

As a prospective customer, I can provide my contact information and the essential details of the product I want so the business can respond with relevant options or a quote without first asking for basic information.

**Why this priority**: Capturing a useful, actionable request is the primary business outcome of the contact page.

**Independent Test**: Complete the form with customer details, product type, quantity, dimensions, intended use, and project details, submit it, and verify that the confirmation page appears and every entered value is included in the received request.

**Acceptance Scenarios**:

1. **Given** a customer knows the product and measurements they need, **When** they enter the required contact and order information and submit, **Then** the request is accepted and the customer sees a clear confirmation.
2. **Given** a customer does not know every specification, **When** they provide all required information and leave optional dimensions or preferences blank, **Then** the request can still be submitted.
3. **Given** required information is missing or invalid, **When** the customer attempts to submit, **Then** the form identifies the affected field and preserves the information already entered.

---

### User Story 2 - Understand What Information to Provide (Priority: P2)

As a customer who may not know sign-industry terminology, I can understand each requested field and distinguish required information from optional details so I can complete the form confidently.

**Why this priority**: Clear organization and guidance reduce abandonment and improve the quality of submitted requests.

**Independent Test**: Review the form on desktop and mobile without prior product knowledge and verify that section headings, labels, examples, units, and required indicators make the requested information understandable.

**Acceptance Scenarios**:

1. **Given** a first-time customer opens the form, **When** they scan it, **Then** customer details, product details, measurements, and project context are grouped into clearly named sections.
2. **Given** a customer does not know an optional answer, **When** they read the label or helper text, **Then** they understand that they may leave it blank or provide their best estimate.
3. **Given** a customer uses a phone or keyboard, **When** they move through the form, **Then** fields remain readable, controls have usable touch targets, and focus order follows the visual order.

---

### User Story 3 - Send a Trustworthy, Spam-Resistant Request (Priority: P3)

As both a customer and the business, I want requests to use the site's established delivery and spam-protection flow so legitimate inquiries arrive reliably without exposing unnecessary customer data.

**Why this priority**: A polished form has no value if submissions are lost, malformed, or overwhelmed by automated spam.

**Independent Test**: Build the production site, verify the form is discoverable by the configured form processor, confirm the anti-spam field is present but hidden from customers, and check that successful submission routes to the existing confirmation page.

**Acceptance Scenarios**:

1. **Given** the production site is built, **When** the output is inspected, **Then** the request form and all submitted field names are registered for collection.
2. **Given** an automated bot fills the designated trap field, **When** it submits the request, **Then** the submission can be identified by the existing spam-protection mechanism.
3. **Given** a customer submits successfully, **When** processing completes, **Then** they are redirected to the existing thank-you page rather than left on an ambiguous form state.

### Edge Cases

- A customer enters zero, a negative number, or a non-whole number for quantity.
- A customer has measurements in inches or feet, or knows only some of width, height, and depth.
- A customer chooses “Other / Not sure yet” because no listed product type fits.
- A customer enters a very long project description or uses punctuation in company and product details.
- A customer has no company, phone number, preferred material, finish, or firm deadline.
- The form is viewed on a narrow mobile screen or at enlarged browser text size.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The contact page MUST present the form as a product or quote request rather than a generic message form.
- **FR-002**: The form MUST collect the customer's name and email address as required contact information.
- **FR-003**: The form MUST allow the customer to provide an optional company name and phone number.
- **FR-004**: The form MUST collect a required product type, including an option for customers who are unsure or need an unlisted product.
- **FR-005**: The form MUST collect a required whole-number quantity of at least one.
- **FR-006**: The form MUST allow separate width, height, and depth measurements and MUST associate those measurements with a selected unit.
- **FR-007**: Measurement fields MUST accept decimal values, MUST reject negative values, and MUST remain optional.
- **FR-008**: The form MUST allow the customer to describe a known size, model, material, color, or finish when applicable.
- **FR-009**: The form MUST collect the product's intended use or installation context as required information.
- **FR-010**: The form MUST allow the customer to provide a desired timeline and delivery or project location.
- **FR-011**: The form MUST collect a required free-form request description for specifications, artwork, mounting needs, additional products, and other relevant context.
- **FR-012**: Fields MUST be grouped into clearly labeled customer, product, measurement, and project-detail sections.
- **FR-013**: Every control MUST have a persistent, programmatically associated label; required fields MUST be indicated in text and MUST use native required-state semantics.
- **FR-014**: Instructions MUST explain that approximate or incomplete optional specifications are acceptable.
- **FR-015**: The form MUST provide context-appropriate input types, autocomplete hints, numeric constraints, and examples that reduce entry errors.
- **FR-016**: The form MUST support keyboard navigation, visible focus feedback, readable error identification, and a single-column layout on narrow screens.
- **FR-017**: The form MUST preserve the existing successful-submission confirmation flow and established spam-protection field.
- **FR-018**: The production build MUST register every submitted field with the site's form-processing service.
- **FR-019**: The form MUST avoid collecting sensitive payment information or other data unnecessary for preparing an initial response or quote.

### Key Entities

- **Customer**: The person making the request, identified by name, email, and optional company and phone details.
- **Product Request**: The primary requested product, including type, quantity, known size or model, measurements, units, material or finish preferences, intended use, timeline, location, and descriptive details.
- **Submission**: The combined customer and product request sent through the site's existing inquiry-processing flow.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A customer with the necessary information can submit a complete product request in under four minutes.
- **SC-002**: In usability review, at least 90% of participants correctly identify which fields are required and can complete the form without assistance.
- **SC-003**: 100% of valid test submissions include customer name, email, product type, quantity, intended use, and request details in the received record.
- **SC-004**: The form remains usable without horizontal scrolling at viewport widths from 320 pixels upward and at 200% browser zoom.
- **SC-005**: 100% of form controls can be reached in a logical order using only a keyboard and display a visible focus indicator.
- **SC-006**: Valid requests with unknown optional dimensions can be submitted successfully, while invalid required values are prevented from submission and identified at the relevant control.

## Assumptions

- The form captures one primary product request; customers can describe additional products in the request-details field.
- Exact measurements, materials, colors, and deadlines are often unknown during an initial inquiry, so they remain optional.
- Email is the minimum required reply channel; phone remains optional.
- The existing form-processing provider, anti-spam approach, and thank-you page remain in use.
- File upload is outside this iteration because the initial request can be qualified without requiring artwork, and uploads introduce additional size, format, and privacy considerations.
- Pricing, payment collection, order confirmation, and checkout are outside the scope; this feature gathers information for a follow-up or quote.
