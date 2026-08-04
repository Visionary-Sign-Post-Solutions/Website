'use client';

import { useEffect, useState } from 'react';
import { products } from '../lib/site';

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Keep the page from scrolling behind the open lightbox.
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <>
      <div className="gallery-grid">
        {products.map((p) => (
          <figure
            key={p.slug}
            className="gallery-item reveal"
            onClick={() => setActive(p)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActive(p);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View larger: ${p.caption}`}
          >
            <img src={p.image} alt={p.alt} />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>

      <div
        className={`lightbox${active ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={() => setActive(null)}
      >
        <button className="lightbox-close" aria-label="Close" onClick={() => setActive(null)}>
          &times;
        </button>
        {active ? (
          <img src={active.image} alt={active.alt} onClick={(e) => e.stopPropagation()} />
        ) : null}
      </div>
    </>
  );
}
