import Link from 'next/link';

// `actions` is a list of { href, label, variant }. External links (tel:, http)
// render as plain anchors; internal ones use Next's client-side Link.
export default function CtaBanner({ title, text, actions = [], className = '' }) {
  return (
    <div className={`cta-banner reveal ${className}`.trim()}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="actions">
        {actions.map((a) => {
          const cls = `btn ${a.variant === 'outline' ? 'btn-outline-light' : 'btn-primary'}`;
          const external = /^(tel:|mailto:|https?:)/.test(a.href);
          return external ? (
            <a key={a.href} className={cls} href={a.href}>
              {a.label}
            </a>
          ) : (
            <Link key={a.href} className={cls} href={a.href}>
              {a.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
