import PageHero from '../../components/PageHero';
import ContactForm from '../../components/ContactForm';
import { site } from '../../lib/site';
import { PinIcon, PhoneIcon, ClockIcon } from '../../components/Icons';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Visionary Sign & Post Solutions in Charlotte, NC — serving North and South Carolina. Call 704-302-2860 or send us a message.',
};

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6688917.103839404!2d-85.16293486684138!3d35.05491884020397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina!5e0!3m2!1sen!2sus!4v1698359494585!5m2!1sen!2sus';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Let's Keep In Touch!" crumb="Contact">
        Questions about a product, a quote, or a custom build — we&apos;re happy to help.
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
                Based in Charlotte, proudly serving the North Carolina &amp; South Carolina area.
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
            <span className="kicker">Get in Touch</span>
            <h2>Any Questions? Write to Us</h2>
            <p>Write down and send us a message — we&apos;ll get back to you shortly.</p>
          </div>
          <div className="form-card reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
