const ruleTester = require("./ruleTester");
const gqlNamingRule = require("../rules/enforce-graphql-naming");

const testGQLNaming = ruleTester.run(
  "enforce-graphql-naming-conventions", // rule name
  gqlNamingRule, // rule code
  {
    // checks
    // 'valid' checks cases that should pass
    valid: [
      {
        filename: "path/to/Form.js",
        code:
          "const FormQuery = graphql(`query Form {...RentalItemUpdateFragment ...RSCFetchFragment}`);",
      },
      {
        filename: "path/to/Format.js",
        code:
          "const FormatFragment = graphql(`fragment FormatFragment on Format { slug title }`);",
      },
      {
        filename: "path/to/Mutation.js",
        code:
          "const RentalItemUpdate = graphql(`mutation MutationRentalItemUpdate($input: UpdateRentalItemInput!) { updateRentalItem(input: $input) {...MutationFormFragment rentalItem { id title } }}`);",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        filename: "path/to/Format.js",
        code:
          "const FormatFragment = graphql(`fragment WrongFormat on Format { slug title }`);",
        errors: [
          {
            message:
              "Fragment names must start with the module name and end with `Fragment`. Expected name to start with `FormatFragment`, got `WrongFormat`.",
            line: 1,
            column: 42,
            endLine: 1,
            endColumn: 53,
          },
        ],
      },
      {
        filename: "path/to/Format.js",
        code:
          "const FormatFragment = graphql(`fragment Format on Format { slug title }`);",
        errors: [
          {
            message:
              "Fragment names must start with the module name and end with `Fragment`. Expected name to end with `Fragment` but got `Format`.",
            line: 1,
            column: 42,
            endLine: 1,
            endColumn: 48,
          },
        ],
      },
    ],
  }
);

module.exports = testGQLNaming;
