/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a plain static site — Netlify serves the `out/` folder directly.
  output: 'export',

  // Generates /catalog/index.html instead of /catalog.html, so the URLs match
  // the old WordPress permalinks (/catalog/, /gallery/, /contact/, ...).
  trailingSlash: true,

  // No image optimization server exists in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
