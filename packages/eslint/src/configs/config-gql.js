const gql = require("@graphql-eslint/eslint-plugin");
const gqlOperationsAll = require("@graphql-eslint/eslint-plugin").flatConfigs[
  "operations-all"
];
const relay = require("eslint-plugin-relay");

module.exports = {
  files: ["*.graphql"],
  plugins: { "@graphql-eslint": gql, relay },
  // @graphql-eslint is also setup for flat config and can be included directly in the
  // configs array, but since we specify rule configs, it seemed simplest to spread it
  // here
  ...gqlOperationsAll,
  rules: {
    ...gqlOperationsAll.rules,

    "@graphql-eslint/naming-convention": [
      "error",
      {
        VariableDefinition: "camelCase",
        OperationDefinition: {
          style: "PascalCase",
        },
        FragmentDefinition: {
          style: "PascalCase",
        },
      },
    ],
    "@graphql-eslint/no-one-place-fragments": ["off"],
  },
};
