import PageHero from '../../components/PageHero';
import CtaBanner from '../../components/CtaBanner';
import Gallery from '../../components/Gallery';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Gallery',
  description:
    'A look at our work — custom aluminum posts, panels, frames, message boards, dimensional letters and monument signs built by Visionary Sign & Post Solutions.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Our Work" crumb="Gallery">
        A look at the posts, panels, frames, boards, letters and signs we&apos;ve built. Click any
        photo to view it larger.
      </PageHero>

      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>

      <section className="section soft" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBanner
            title="Like What You See?"
            text="Let's build something for your brand — tell us about your project and we'll take it from there."
            actions={[
              { href: '/start-your-project/', label: 'Start Your Project' },
              { href: `tel:${site.phone}`, label: `Call ${site.phone}`, variant: 'outline' },
            ]}
          />
        </div>
      </section>
    </>
  );
}
