/** @type {import('next').NextConfig} */

const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "https://api.sandbox.meru.host/graphql",
      port: "",
    },
    {
      protocol: "https",
      hostname: "wdp-api-staging.s3.us-west-2.amazonaws.com",
      port: "",
    },
    {
      protocol: "https",
      hostname: "wdp-api-stg.s3.us-west-2.amazonaws.com",
      port: "",
    },
    {
      protocol: "https",
      hostname: "**.meru.host",
      port: "",
    },
    {
      protocol: "https",
      hostname: "**.digitaloceanspaces.com",
      port: "",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "6006",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "3000",
    },
    {
      protocol: "http",
      hostname: "localhost",
      port: "10042",
    },
  ],
  deviceSizes: [640, 750, 828, 1080, 1200, 1310, 1920],
  formats: ["image/avif", "image/webp"],
  imageSizes: [128, 256, 384],
};

const compiler = {
  relay: {
    src: "./",
    language: "typescript",
    artifactDirectory: "__generated__",
  },
  styledComponents: true,
};

const nextConfig = {
  transpilePackages: ["@spissvinkel/alea"],
  images,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  compiler,
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
};

module.exports = nextConfig;