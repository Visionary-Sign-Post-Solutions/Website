'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, nav } from '../lib/site';
import { PinIcon, ClockIcon, PhoneIcon, MailIcon } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Next.js normalizes the path; compare with and without the trailing slash.
  const isActive = (href) => {
    const strip = (s) => (s !== '/' && s.endsWith('/') ? s.slice(0, -1) : s);
    return strip(pathname) === strip(href);
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-group">
            <span className="topbar-item">
              <PinIcon />
              {site.city}
            </span>
            <span className="topbar-item topbar-hours">
              <ClockIcon />
              {site.hours}
            </span>
          </div>
          <div className="topbar-group">
            <span className="topbar-item">
              <PhoneIcon />
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </span>
            <span className="topbar-item">
              <MailIcon />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </span>
            <span className="topbar-item">
              <img className="flag" src="/images/flag.png" alt="American flag" />
              Made in the USA
            </span>
          </div>
        </div>
      </div>

      <header className={`site-header${open ? ' nav-open' : ''}`}>
        <div className="container">
          <Link className="brand" href="/">
            <img src="/images/vsps-logo.png" alt={`${site.name} — ${site.tagline}`} />
          </Link>
          <nav aria-label="Main navigation">
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
            <ul className="nav-links">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      [item.cta ? 'nav-cta' : '', isActive(item.href) ? 'active' : '']
                        .filter(Boolean)
                        .join(' ') || undefined
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
