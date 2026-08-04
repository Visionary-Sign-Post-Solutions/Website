// Netlify Forms picks these up by parsing the exported HTML at deploy time,
// so `data-netlify` + the hidden form-name input must be present in the static
// output. They are — this renders on the server during `next build`.
export default function ContactForm() {
  return (
    <form
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
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required autoComplete="email" />
        </div>
        <div className="field full">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <div className="full">
          <button className="btn btn-primary" type="submit">
            Send a Message
          </button>
        </div>
      </div>
    </form>
  );
}
