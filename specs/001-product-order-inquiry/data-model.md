# Data Model: Product Order Inquiry Form

## Customer

Represents the person or organization asking about an order.

| Field | Required | Validation and meaning |
|---|---:|---|
| Name | Yes | Non-empty customer name; browser name autocomplete |
| Company | No | Organization associated with the request |
| Email | Yes | Valid email address; primary reply channel |
| Phone | No | Telephone number; browser telephone autocomplete |

## Product Request

Represents the primary product and context needed for an initial response or quote.

| Field | Required | Validation and meaning |
|---|---:|---|
| Product type | Yes | One supported category or “Other / Not sure yet” |
| Quantity | Yes | Whole number greater than or equal to 1 |
| Known size/model | No | Common size, model, SKU, or other customer-known identifier |
| Width | No | Non-negative decimal measurement |
| Height | No | Non-negative decimal measurement |
| Depth | No | Non-negative decimal measurement |
| Measurement unit | No | Inches or feet; applies to supplied dimensions |
| Material/finish | No | Requested material, color, coating, or finish |
| Intended use | Yes | Where and how the product will be used or installed |
| Timeline | No | Desired completion window |
| Project location | No | City/state, postal code, or delivery/installation context |
| Request details | Yes | Specifications, mounting, artwork status, additional items, and other context |

## Submission

Combines exactly one Customer with one primary Product Request and is delivered through the existing form-processing flow.

### State transitions

1. **Editing**: The customer enters and reviews information.
2. **Invalid**: Browser validation identifies a missing or malformed required value; entered values remain available for correction.
3. **Submitted**: A valid request is posted to the form processor.
4. **Confirmed**: The customer is routed to the existing thank-you page.

The application does not collect payment details, create an account, or treat the request as a confirmed order.
