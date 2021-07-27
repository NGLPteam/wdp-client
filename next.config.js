const imageDomains = [
  "lorempixel.com",
  "picsum.photos",
  "wdp-api-staging.s3.us-west-2.amazonaws.com",
  "via.placeholder.com",
  "localhost:6006",
  "localhost:3000",
];

module.exports = {
  // Warning: Dangerously allow production builds to successfully complete even if
  //   your project has ESLint errors.
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    domains: imageDomains,
  },
};
