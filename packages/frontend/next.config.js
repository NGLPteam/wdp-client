// eslint-disable-next-line @typescript-eslint/no-var-requires
const transpiler = require("next-transpile-modules");

const imageDomains = [
  "localhost:6007",
  "localhost:3001",
  "api.staging.nglp.org",
  "wdp-api-staging.s3.us-west-2.amazonaws.com",
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
