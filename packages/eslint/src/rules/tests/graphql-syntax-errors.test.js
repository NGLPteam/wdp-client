const ruleTester = require("./ruleTester");
const gqlSyntaxRule = require("../rules/graphql-syntax-errors");

const testGQLSyntax = ruleTester.run("graphql-syntax-errors", gqlSyntaxRule, {
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
  invalid: [
    {
      filename: "path/to/TestComponent.js",
      code: [
        "graphql(`query{id}`);",
        "graphql(`{id}`);",
        "graphql(`subscription {id}`);",
        "graphql(`mutation {id}`);",
      ].join("\n"),
      errors: [
        {
          message: "Operations in graphql tags require a name.",
          line: 1,
          column: 10,
        },
        {
          message: "Operations in graphql tags require a name.",
          line: 2,
          column: 10,
        },
        {
          message: "Operations in graphql tags require a name.",
          line: 3,
          column: 10,
        },
        {
          message: "Operations in graphql tags require a name.",
          line: 4,
          column: 10,
        },
      ],
    },
    {
      filename: "path/to/TestComponent.js",
      code:
        "test;\ngraphql(`fragment TestComponentFragment on User { ${x} }`);",
      errors: [
        {
          message: "graphql templates do not support ${...} interpolations.",
        },
      ],
    },
    {
      code:
        "graphql(`fragment TestFragment on User { id } fragment TestFragment2 on User { id }`);",
      errors: [
        {
          message: "graphql templates can only contain a single definition.",
        },
      ],
    },
    {
      filename: "path/to/TestComponent.js",
      code: "graphql(`fragment TestComponentFragment on User {\n  id()\n}`);",
      errors: [
        {
          message: `Syntax Error: Expected Name, found ")".`,
        },
      ],
    },
  ],
});

module.exports = testGQLSyntax;
