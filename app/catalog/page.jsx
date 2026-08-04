import PageHero from '../../components/PageHero';
import CtaBanner from '../../components/CtaBanner';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Catalog',
  description:
    'Browse the full Visionary Sign & Post Solutions product catalog — aluminum posts, panels, frames, brackets, extrusions and more.',
};

export default function CatalogPage() {
  return (
    <>
      <PageHero title="Product Catalog" crumb="Catalog">
        Every post, panel, frame, bracket and extrusion we offer — browse the interactive catalog
        below, or give us a call and we&apos;ll help you spec the right product.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="catalog-embed reveal">
            <iframe
              src={site.catalogUrl}
              title={`${site.name} product catalog`}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="form-note" style={{ textAlign: 'center', marginTop: 22 }}>
            Trouble viewing the catalog?{' '}
            <a href={site.catalogUrl} target="_blank" rel="noopener noreferrer">
              Open it in a new tab
            </a>{' '}
            or call <a href={`tel:${site.phone}`}>{site.phone}</a>.
          </p>
        </div>
      </section>

      <section className="section soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            title="Found What You Need?"
            text="Tell us about your project and we'll get you a quote — wholesale pricing available for the trade."
            actions={[
              { href: '/start-your-project/', label: 'Start Your Project' },
              { href: '/contact/', label: 'Contact Us', variant: 'outline' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
