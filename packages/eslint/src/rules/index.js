const gqlNamingRule = require("./enforce-graphql-naming");
const fragmentSpreadsRule = require("./must-spread-fragment-in-parent");
const gqlSyntaxRule = require("./graphql-syntax-errors");

const customRulesCode = {
  "enforce-graphql-naming-conventions": gqlNamingRule,
  "must-spread-fragment-in-parent": fragmentSpreadsRule,
  "graphql-syntax-errors": gqlSyntaxRule,
};

const customRules = {
  "custom-rules/enforce-graphql-naming-conventions": "error",
  "custom-rules/must-spread-fragment-in-parent": "error",
  "custom-rules/graphql-syntax-errors": "error",
};

module.exports = { customRules, customRulesCode };
