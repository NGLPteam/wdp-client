const { FlatRuleTester } = require("eslint/use-at-your-own-risk");
const parser = require("@typescript-eslint/parser");

const ruleTester = new FlatRuleTester({
  files: ["**/*.ts", "**/*.tsx"],
  ignores: [
    ".next/",
    "eslint/",
    "lib/gql/",
    ".graphqlrc.ts",
    "tailwind.config.ts",
  ],
  languageOptions: {
    parser,
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
});

module.exports = ruleTester;
