import Link from 'next/link';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Thank You',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="container error-page">
      <div className="code" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)' }}>
        Thank You!
      </div>
      <h1>Your message is on its way.</h1>
      <p>
        We&apos;ve received your message and will get back to you as soon as possible — typically
        within one business day. Need us sooner? Call{' '}
        <a href={`tel:${site.phone}`}>{site.phone}</a>.
      </p>
      <Link className="btn btn-primary" href="/">
        Back to Home
      </Link>
    </div>
  );
}
