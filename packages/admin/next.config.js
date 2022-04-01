// eslint-disable-next-line @typescript-eslint/no-var-requires
const transpiler = require("next-transpile-modules");

const imageDomains = process.env.IMAGE_DOMAINS
  ? process.env.IMAGE_DOMAINS.split(",")
  : [
      "lorempixel.com",
      "picsum.photos",
      "wdp-api-staging.s3.us-west-2.amazonaws.com",
      "wdp-api-stg.s3.us-west-2.amazonaws.com",
      "via.placeholder.com",
      "localhost:6006",
      "localhost:3000",
      "localhost:10042",
      "localhost",
      "api.staging.nglp.org",
    ];

const withTM = transpiler(["@spissvinkel/alea"]);

module.exports = withTM({
  experimental: {
    externalDir: true,
  },
  images: {
    domains: imageDomains,
  },
});
