/** @type {import('next').NextConfig} */
const imageDomains = [
  "lorempixel.com",
  "picsum.photos",
  "wdp-api-staging.s3.us-west-2.amazonaws.com",
  "via.placeholder.com",
  "localhost:6006",
  "localhost:3000",
  "api.staging.nglp.org",
];

module.exports = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: imageDomains,
    reactStrictMode: true,
  },
};
