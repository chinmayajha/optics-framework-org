/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so GitHub Pages can serve the build as plain files:
  //   main         -> optics-framework.org/
  //   <any-branch> -> optics-framework.org/<branch>/
  // CI sets PAGES_BASE_PATH (e.g. "/simple-landing"); local dev stays unprefixed.
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
