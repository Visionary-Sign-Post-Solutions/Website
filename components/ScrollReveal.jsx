'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// How long to wait before deciding the observer isn't working. If elements are
// sitting in the viewport unrevealed by then, we show everything outright —
// losing the animation is far better than leaving the page blank.
const FAILSAFE_MS = 3000;

// Fades elements marked with .reveal into view. Mounted once in the root
// layout and re-run on navigation, since client-side routing swaps the page
// content without a full reload.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const show = (el) => el.classList.add('visible');
    const pending = () => Array.from(document.querySelectorAll('.reveal:not(.visible)'));

    const els = pending();
    if (!els.length) return;

    // No observer support, or a viewport we can't measure: show everything.
    if (!('IntersectionObserver' in window) || window.innerHeight === 0) {
      els.forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => io.observe(el));

    const failsafe = setTimeout(() => {
      const stuck = pending();
      const anyInView = stuck.some((el) => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      });
      if (anyInView) {
        io.disconnect();
        stuck.forEach(show);
      }
    }, FAILSAFE_MS);

    return () => {
      clearTimeout(failsafe);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
