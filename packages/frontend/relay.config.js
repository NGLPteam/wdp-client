module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: ".",
  schema: "./schema.graphql",
  exclude: [
    "**/node_modules/**",
    "**/__mocks__/**",
    "**/__generated__/**",
    "**/.next/**",
    "**/__schema__/**",
    "**/_pages/**",
  ],
  language: "typescript",
  artifactDirectory: "./__generated__",
  customScalarTypes: {
    Slug: "string",
    ISO8601DateTime: "string",
    ISO8601Date: "string",
  },
};
