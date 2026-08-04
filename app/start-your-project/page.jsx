import PageHero from '../../components/PageHero';
import CtaBanner from '../../components/CtaBanner';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Start Your Project',
  description:
    'Tell us about your sign or post project and get a quote from Visionary Sign & Post Solutions — custom aluminum signage made in Charlotte, NC.',
};

const projectTypes = [
  'Posts',
  'Panels',
  'Frames',
  'Message Boards',
  'Dimensional Letters',
  'Monument / Architectural Signs',
  'Traffic Control / Wayfinding',
  'Wholesale / Trade Order',
  'Other / Not Sure Yet',
];

const timelines = ['Flexible', 'Within 2 weeks', 'Within a month', '1–3 months'];

export default function StartYourProjectPage() {
  return (
    <>
      <PageHero title="Start Your Project" crumb="Start Your Project">
        Tell us what you&apos;re building and we&apos;ll get back to you with options, specs and a
        quote. Prefer to talk it through? Call{' '}
        <a href={`tel:${site.phone}`} style={{ color: 'var(--violet-300)' }}>
          {site.phone}
        </a>
        .
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="form-card reveal" style={{ maxWidth: 860, margin: '0 auto' }}>
            <form
              name="project-quote"
              method="POST"
              action="/thank-you/"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="project-quote" />
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
                  <label htmlFor="company">Company (optional)</label>
                  <input type="text" id="company" name="company" autoComplete="organization" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="project-type">Project Type</label>
                  <select id="project-type" name="project-type" defaultValue={projectTypes[0]}>
                    {projectTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="timeline">Timeline</label>
                  <select id="timeline" name="timeline" defaultValue={timelines[0]}>
                    {timelines.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="details">Project Details</label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    placeholder="Sizes, quantities, materials, mounting, location — whatever you know so far."
                  />
                </div>
                <div className="full">
                  <button className="btn btn-primary" type="submit">
                    Request a Quote
                  </button>
                </div>
              </div>
              <p className="form-note">
                We typically respond within one business day, {site.hours}.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="section soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            title="Not Sure Where to Start?"
            text="Browse our catalog for products and specs, or check out examples of our finished work in the gallery."
            actions={[
              { href: '/catalog/', label: 'View Catalog' },
              { href: '/gallery/', label: 'See Our Work', variant: 'outline' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
