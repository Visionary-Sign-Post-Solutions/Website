# Contact Form Contract

## Public interaction

- **Page**: `/contact/`
- **Method**: `POST`
- **Form name**: `contact`
- **Success destination**: `/thank-you/`
- **Spam trap**: `bot-field`, hidden from ordinary users
- **Encoding**: Browser-default URL-encoded form submission

## Submitted fields

| Field name | Control | Required | Contract |
|---|---|---:|---|
| `form-name` | hidden | Yes | Constant value `contact` |
| `bot-field` | text, hidden | No | Honeypot value reserved for spam filtering |
| `name` | text | Yes | Customer name; non-empty |
| `company` | text | No | Customer organization |
| `email` | email | Yes | Browser-valid email address |
| `phone` | tel | No | Customer phone number |
| `product-type` | select | Yes | Supported category or `Other / Not sure yet` |
| `quantity` | number | Yes | Integer, minimum 1, step 1 |
| `known-size` | text | No | Size, model, or SKU known to the customer |
| `width` | number | No | Non-negative decimal, step `any` |
| `height` | number | No | Non-negative decimal, step `any` |
| `depth` | number | No | Non-negative decimal, step `any` |
| `dimension-unit` | select | No | `Inches` or `Feet` |
| `material-finish` | text | No | Material, color, or finish preference |
| `intended-use` | textarea | Yes | Use and installation context; non-empty |
| `timeline` | select | No | Desired completion window |
| `project-location` | text | No | Delivery or installation location |
| `details` | textarea | Yes | Additional specifications and context; non-empty |

## Presentation and accessibility contract

- Customer, product, measurements, and project context are separate semantic groups.
- Every visible control has a persistent associated label.
- Required status is communicated in visible text and native form semantics.
- Optional measurement guidance explicitly allows estimates or blank values.
- Focus order follows source and visual order; the submit button is last.
- At narrow widths, all field rows collapse to one column without horizontal page scrolling.
- Focus indicators remain visible and meet the site's established violet design language.

## Build registration contract

`public/__forms.html` declares the `contact` form and every submitted field name above so Netlify can register them during deployment. It also declares the existing `project-quote` form and its current fields to keep both site forms detectable.
