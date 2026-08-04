import Link from 'next/link';
import { site, nav } from '../lib/site';
import { PinIcon, ClockIcon, PhoneIcon, MailIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/vsps-logo.png" alt={site.name} />
            <p>{site.blurb}</p>
          </div>
          <div>
            <h4>Useful Links</h4>
            <ul className="footer-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <PinIcon />
                <span>
                  {site.city}
                  <br />
                  {site.serviceArea}
                </span>
              </li>
              <li>
                <PhoneIcon />
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <ClockIcon />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="usa">
            <img src="/images/flag.png" alt="" /> Proudly made in the USA
          </span>
        </div>
      </div>
    </footer>
  );
}
