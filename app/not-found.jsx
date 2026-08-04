import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="container error-page">
      <div className="code">404</div>
      <h1>Oops! That page can&apos;t be found.</h1>
      <p>
        It looks like nothing was found at this location. The page may have moved when we updated
        the site — try one of the links in the menu above.
      </p>
      <Link className="btn btn-primary" href="/">
        Back to Home Page
      </Link>
    </div>
  );
}
