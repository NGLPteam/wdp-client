const imageDomains = [
  "localhost:6007",
  "localhost:3001",
  "api.staging.nglp.org",
  "via.placeholder.com",
  "wdp-api-staging.s3.us-west-2.amazonaws.com",
];

module.exports = {
  experimental: {
    externalDir: true,
  },
  images: {
    domains: imageDomains,
  },
};
