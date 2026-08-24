import PageHero from '../../components/PageHero';
import ContactForm from '../../components/ContactForm';
import { site } from '../../lib/site';
import { PinIcon, PhoneIcon, ClockIcon } from '../../components/Icons';

export const metadata = {
  title: 'Request Product Information & Quotes',
  description:
    'Request product information or a quote from Visionary Sign & Post Solutions. Share product type, quantity, dimensions, intended use, and project details.',
};

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6688917.103839404!2d-85.16293486684138!3d35.05491884020397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina!5e0!3m2!1sen!2sus!4v1698359494585!5m2!1sen!2sus';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Tell Us What You Need" crumb="Contact">
        Share what you&apos;d like to order and how you&apos;ll use it. We&apos;ll review the details
        and follow up with the right options and next steps.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="info-grid" style={{ marginBottom: 64 }}>
            <div className="info-card reveal">
              <div className="icon">
                <PinIcon />
              </div>
              <h3>Areas We Serve</h3>
              <p>
                Based in Charlotte, proudly serving the lower 48 States and Canada.
              </p>
            </div>
            <div className="info-card reveal">
              <div className="icon">
                <PhoneIcon />
              </div>
              <h3>Quick Contact</h3>
              <p>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
            <div className="info-card reveal">
              <div className="icon">
                <ClockIcon />
              </div>
              <h3>Opening Hours</h3>
              <p>
                {site.hoursLong[0]}
                <br />
                {site.hoursLong[1]}
              </p>
            </div>
          </div>

          <div className="map-wrap reveal">
            <iframe
              src={MAP_SRC}
              title="Map of our North Carolina service area"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head center reveal">
            <span className="kicker">Product Request</span>
            <h2>Help Us Understand Your Order</h2>
            <p>
              Tell us the product, quantity, size, dimensions, and intended use. It&apos;s okay if
              some specifications are still estimates—we&apos;ll help you work through them.
            </p>
          </div>
          <div className="form-card reveal" style={{ maxWidth: 920, margin: '0 auto' }}>
            <ContactForm />
            <p className="form-note">
              We typically respond within one business day. For time-sensitive requests, call{' '}
              <a href={`tel:${site.phone}`}>{site.phone}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
