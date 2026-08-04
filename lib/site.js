// Single source of truth for business details and navigation.
// Change a phone number or add a nav item here and it updates every page.

export const site = {
  name: 'Visionary Sign & Post Solutions',
  tagline: 'Elevating Your Brand, One Sign At A Time',
  phone: '704-302-2860',
  email: 'david.bestllc@gmail.com',
  city: 'Charlotte, North Carolina',
  serviceArea: 'Serving NC & SC',
  hours: 'Mon–Sat: 9:00am – 7:00pm',
  hoursLong: ['Monday – Saturday', '9:00am to 7:00pm'],
  blurb:
    "Experience excellence with our custom-built aluminum sign products tailored to the sign and digital print industry — top-notch quality and adaptability at competitive rates.",
  catalogUrl: 'https://flowpaper.com/shared/918408a8/Catalog1/',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/catalog/', label: 'Catalog' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/contact/', label: 'Contact' },
  { href: '/start-your-project/', label: 'Start Your Project', cta: true },
];

export const products = [
  {
    slug: 'posts',
    title: 'Posts',
    image: '/images/post-liberty-patriot.jpg',
    alt: 'Decorative black street sign post with Liberty Way and Patriot Ln blades and a stop sign',
    caption: 'Decorative Street Sign Post',
  },
  {
    slug: 'panels',
    title: 'Panels',
    image: '/images/panel-directional.jpg',
    alt: 'Thornwood Park community directional sign pointing to the playground and pool area',
    caption: 'Community Directional Signage',
  },
  {
    slug: 'frames',
    title: 'Frames',
    image: '/images/frame-wakefield.jpg',
    alt: 'Wakefield Forest wood-grain sign panel mounted in a black metal frame',
    caption: 'Framed Panel System',
  },
  {
    slug: 'boards',
    title: 'Boards',
    image: '/images/board-message-center.jpg',
    alt: 'Springfield enclosed community message center on decorative posts',
    caption: 'Community Message Center',
  },
  {
    slug: 'letters',
    title: 'Letters',
    image: '/images/sign-storefront.jpg',
    alt: 'Murphys Kitchen and Tap dimensional storefront signage',
    caption: 'Dimensional Storefront Lettering',
  },
  {
    slug: 'signs',
    title: 'Signs',
    image: '/images/sign-monument.jpg',
    alt: 'Marks Creek Industrial Park monument sign with tenant panels',
    caption: 'Architectural Monument Sign',
  },
];
