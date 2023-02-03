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
  ],
  language: "typescript",
  artifactDirectory: "./__generated__",
  customScalars: {
    Slug: "String",
    ISO8601DateTime: "String",
    ISO8601Date: "String",
  },
};
