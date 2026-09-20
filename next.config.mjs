/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so every branch can be served as plain files from
  // GitHub Pages: main -> /, other branches -> /<branch>/.
  // CI sets PAGES_BASE_PATH (e.g. "/muse-gen"); local dev stays unprefixed.
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
