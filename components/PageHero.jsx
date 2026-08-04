import Link from 'next/link';

export default function PageHero({ title, crumb, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="crumbs">
          <Link href="/">Home</Link> &rsaquo; {crumb || title}
        </p>
        <h1>{title}</h1>
        {children ? <p className="sub">{children}</p> : null}
      </div>
    </section>
  );
}
