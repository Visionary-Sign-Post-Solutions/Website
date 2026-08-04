import { Inter, Sora } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { site } from '../lib/site';
import './globals.css';

// Self-hosted at build time — no request to Google on page load.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vspsusa.com'),
  title: {
    default: `${site.name} | Custom Aluminum Signs & Posts — Charlotte, NC`,
    template: `%s | ${site.name}`,
  },
  description:
    'Custom-built aluminum sign and post products for the sign and digital print industry. Posts, panels, frames, message boards, dimensional letters and CNC machining — made in Charlotte, NC and serving the Carolinas.',
  icons: { icon: '/images/flag.png' },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      'Custom-built aluminum sign and post products for the sign and digital print industry, made in Charlotte, NC.',
    url: 'https://vspsusa.com',
    siteName: site.name,
    images: ['/images/vsps-logo.png'],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
