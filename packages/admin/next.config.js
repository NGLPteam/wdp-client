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
  experimental: {
    externalDir: true,
  },
  images: {
    domains: imageDomains,
  },
};
