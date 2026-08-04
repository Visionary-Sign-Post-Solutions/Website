import Link from 'next/link';
import CtaBanner from '../components/CtaBanner';
import ContactForm from '../components/ContactForm';
import { site, products } from '../lib/site';
import { CheckIcon, StarIcon, ToolIcon, ShieldIcon, TruckIcon } from '../components/Icons';

const stats = [
  { value: '100%', label: 'American-Made Products' },
  { value: 'CNC', label: 'Precision Machining' },
  { value: 'NC & SC', label: 'Service Area' },
  { value: 'Wholesale', label: 'Trade Pricing Available' },
];

const capabilities = [
  {
    Icon: ToolIcon,
    title: 'CNC Machining Services',
    body: 'Precision CNC machining with software specialized for custom sign and post making — accurate, repeatable, production-ready.',
  },
  {
    Icon: ShieldIcon,
    title: 'Heavy-Wall Durability',
    body: 'Robust heavy-wall aluminum construction stands up to the elements and outlasts lighter-gauge competitors.',
  },
  {
    Icon: TruckIcon,
    title: 'Stock Items, Ready Fast',
    body: 'From post material sold by the foot to complete kits, our wide inventory gives you quick access to stock items.',
  },
];

const highlights = [
  'Post material sold by the foot or as complete kits',
  'CNC machining with software specialized for sign & post making',
  'Wide inventory for quick access to stock items',
  'Wholesale pricing for the trade',
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="hero-kicker">
              <img src="/images/flag.png" alt="" />
              Best In-Country Craftsmanship
            </span>
            <h1>
              Custom Superior <span className="accent">Craftsmanship</span>
            </h1>
            <p className="lead">
              Custom-built aluminum sign and post products for the sign and digital print industry.
              From post material sold by the foot to wholesale, we offer a wide inventory for quick
              access to stock items.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/start-your-project/">
                Start Your Project
              </Link>
              <Link className="btn btn-outline-light" href="/catalog/">
                Browse the Catalog
              </Link>
            </div>
          </div>
          <div className="hero-figure">
            <div className="photo">
              <img src="/images/post-liberty-patriot.jpg" alt={products[0].alt} />
            </div>
            <div className="hero-card">
              <div className="icon">
                <StarIcon />
              </div>
              <div>
                <strong>Heavy-Wall Aluminum</strong>
                <span>Built to outlast the elements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-media reveal">
              <div className="main">
                <img src="/images/sign-monument.jpg" alt={products[5].alt} />
              </div>
              <div className="badge">
                <img src="/images/flag.png" alt="" />
                <div>
                  <strong>Proudly American</strong>
                  <span>{site.city}</span>
                </div>
              </div>
            </div>
            <div className="about-copy reveal">
              <span className="kicker">About Company</span>
              <h2>Professional Sign Design &amp; Fabrication</h2>
              <p>
                Experience excellence with our custom-built aluminum sign products tailored to the
                sign and digital print industry. Whether you seek top-notch quality or adaptability
                at competitive rates, we&apos;ve got you covered.
              </p>
              <p>
                Utilizing robust heavy-wall aluminum, our products ensure durability against the
                elements, surpassing competitors&apos; offerings.
              </p>
              <ul className="check-list">
                {highlights.map((h) => (
                  <li key={h}>
                    <CheckIcon />
                    {h}
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary" href="/contact/">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft" id="products">
        <div className="container">
          <div className="section-head center reveal">
            <span className="kicker">What We Build</span>
            <h2>Products &amp; Solutions</h2>
            <p>
              Traffic control designs, multi-panel SLAT signage, wayfinding systems, interpretive
              displays, sandblasted and routed HDU &amp; PVC panels, banner brackets, sign
              extrusions, post &amp; panel systems, reader boards, mailbox posts, bespoke
              fabrications and more.
            </p>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <Link className="product-card reveal" href="/gallery/" key={p.slug}>
                <img src={p.image} alt={p.alt} />
                <div className="label">
                  <h3>{p.title}</h3>
                  <span>View Work</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="kicker">Why Choose Us</span>
            <h2>Built for the Sign Trade</h2>
          </div>
          <div className="cap-grid">
            {capabilities.map(({ Icon, title, body }) => (
              <div className="cap-card reveal" key={title}>
                <div className="icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            title="Explore Our Full Product Catalog"
            text="Browse every post, panel, frame, bracket and extrusion we offer — with specs and options — in our interactive catalog."
            actions={[
              { href: '/catalog/', label: 'View Catalog' },
              { href: `tel:${site.phone}`, label: `Call ${site.phone}`, variant: 'outline' },
            ]}
          />
        </div>
      </section>

      <section className="section" id="contact-form">
        <div className="container">
          <div className="section-head center reveal">
            <span className="kicker">Contact Us</span>
            <h2>Any Questions? Write to Us</h2>
            <p>Send us a message and we&apos;ll get back to you as soon as possible.</p>
          </div>
          <div className="form-card reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
