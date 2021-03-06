// eslint-disable-next-line @typescript-eslint/no-var-requires
const transpiler = require("next-transpile-modules");

const imageDomains = process.env.IMAGE_DOMAINS
  ? process.env.IMAGE_DOMAINS.split(",")
  : [
      "localhost:6007",
      "localhost:3001",
      "localhost:10042",
      "localhost",
      "api.staging.nglp.org",
      "wdp-api-staging.s3.us-west-2.amazonaws.com",
      "wdp-api-stg.s3.us-west-2.amazonaws.com",
    ];

const withTM = transpiler(["@spissvinkel/alea"]);

module.exports = withTM({
  experimental: {
    externalDir: true,
  },
  images: {
    domains: imageDomains,
  },
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
});
