const productTypes = [
  'Posts',
  'Panels',
  'Frames',
  'Message Boards',
  'Dimensional Letters',
  'Monument / Architectural Signs',
  'Traffic Control / Wayfinding',
  'Wholesale / Trade Order',
  'Other / Not sure yet',
];

const timelines = [
  'Flexible / Not sure',
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  '1–3 months',
  'More than 3 months',
];

function RequiredMark() {
  return <span className="required-mark">Required</span>;
}

function OptionalMark() {
  return <span className="optional-mark">Optional</span>;
}

export default function ContactForm() {
  return (
    <form
      className="product-request-form"
      name="contact"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <p className="required-note">
        Fields labeled <strong>Required</strong> help us prepare a useful first response. Estimates
        are welcome for optional specifications.
      </p>

      <fieldset className="form-section">
        <legend>1. Your contact details</legend>
        <p className="form-section-intro">Tell us where to send product options or quote questions.</p>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">
              Name <RequiredMark />
            </label>
            <input type="text" id="name" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="company">
              Company <OptionalMark />
            </label>
            <input type="text" id="company" name="company" autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="email">
              Email <RequiredMark />
            </label>
            <input type="email" id="email" name="email" required autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone <OptionalMark />
            </label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" />
          </div>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>2. What would you like to order?</legend>
        <p className="form-section-intro">
          Start with the main product. You can list additional products in the final details box.
        </p>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="product-type">
              Product type <RequiredMark />
            </label>
            <select id="product-type" name="product-type" defaultValue="" required>
              <option value="" disabled>
                Select a product
              </option>
              {productTypes.map((product) => (
                <option key={product} value={product}>
                  {product}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="quantity">
              Quantity <RequiredMark />
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              step="1"
              inputMode="numeric"
              defaultValue="1"
              required
            />
          </div>
          <div className="field full">
            <label htmlFor="known-size">
              Size, model, or product number <OptionalMark />
            </label>
            <input
              type="text"
              id="known-size"
              name="known-size"
              placeholder="For example: 4 × 8 ft panel or model/SKU"
              aria-describedby="known-size-help"
            />
            <p className="field-help" id="known-size-help">
              Use this when you already know a standard size or catalog reference.
            </p>
          </div>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>3. Dimensions and finish</legend>
        <p className="form-section-intro" id="dimensions-help">
          Share exact or approximate measurements if you know them. Leave unknown dimensions blank.
        </p>
        <div className="dimension-grid" aria-describedby="dimensions-help">
          <div className="field">
            <label htmlFor="width">Width</label>
            <input type="number" id="width" name="width" min="0" step="any" inputMode="decimal" />
          </div>
          <div className="field">
            <label htmlFor="height">Height</label>
            <input type="number" id="height" name="height" min="0" step="any" inputMode="decimal" />
          </div>
          <div className="field">
            <label htmlFor="depth">Depth</label>
            <input type="number" id="depth" name="depth" min="0" step="any" inputMode="decimal" />
          </div>
          <div className="field">
            <label htmlFor="dimension-unit">Unit</label>
            <select id="dimension-unit" name="dimension-unit" defaultValue="Inches">
              <option value="Inches">Inches</option>
              <option value="Feet">Feet</option>
            </select>
          </div>
        </div>
        <div className="field form-section-tail">
          <label htmlFor="material-finish">
            Material, color, or finish <OptionalMark />
          </label>
          <input
            type="text"
            id="material-finish"
            name="material-finish"
            placeholder="For example: aluminum, white powder coat, or unfinished"
          />
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend>4. How will you use it?</legend>
        <p className="form-section-intro">
          A little context helps us recommend the right construction, mounting, and delivery options.
        </p>
        <div className="form-grid">
          <div className="field full">
            <label htmlFor="intended-use">
              Intended use or installation <RequiredMark />
            </label>
            <textarea
              id="intended-use"
              name="intended-use"
              required
              placeholder="Where will the product be used, and how do you expect it to be installed or mounted?"
            />
          </div>
          <div className="field">
            <label htmlFor="timeline">
              Desired timeline <OptionalMark />
            </label>
            <select id="timeline" name="timeline" defaultValue={timelines[0]}>
              {timelines.map((timeline) => (
                <option key={timeline} value={timeline}>
                  {timeline}
                </option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="project-location">
              Delivery or project location <OptionalMark />
            </label>
            <input
              type="text"
              id="project-location"
              name="project-location"
              autoComplete="postal-code"
              placeholder="City and state, postal code, or site location"
            />
          </div>
          <div className="field full">
            <label htmlFor="details">
              Request details <RequiredMark />
            </label>
            <textarea
              id="details"
              name="details"
              required
              placeholder="Tell us about mounting, artwork, special requirements, additional products, or any questions you have."
              aria-describedby="details-help"
            />
            <p className="field-help" id="details-help">
              Please do not include payment card details or other sensitive information.
            </p>
          </div>
        </div>
      </fieldset>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit">
          Submit Product Request
        </button>
        <p>Your request is not a confirmed order. We&apos;ll follow up to review details and next steps.</p>
      </div>
    </form>
  );
}
