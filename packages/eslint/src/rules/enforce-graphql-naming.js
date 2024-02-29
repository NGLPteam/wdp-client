"use strict";

const {
  getGraphQLAST,
  getLoc,
  getModuleName,
  shouldLint,
} = require("./utils");

const operationLabels = {
  query: "Query",
  mutation: "Mutation",
  subscription: "Subscription",
};

const validateTaggedTemplate = (node, context) => {
  const ast = getGraphQLAST(node);

  if (ast instanceof Error) {
    return;
  }

  ast.definitions.forEach((definition) => {
    const moduleName = getModuleName(context.getFilename());
    const definitionName = definition?.name?.value;

    if (!definitionName) return;

    switch (definition.kind) {
      case "OperationDefinition": {
        // if (definitionName.indexOf(moduleName) !== 0) {
        //   context.report({
        //     message:
        //       "{{label}} names must start with the module name. " +
        //       "Expected name to start with `{{expected}}`, got `{{actual}}`.",
        //     data: {
        //       label: operationLabels[definition.operation],
        //       expected: moduleName,
        //       actual: definitionName,
        //     },
        //     loc: getLoc(context, node, definition.name),
        //   });
        // }
        break;
      }
      case "FragmentDefinition": {
        const invalidStart = definitionName.indexOf(moduleName) !== 0;
        const invalidEnd =
          definitionName.indexOf("Fragment") !== definitionName.length - 8;
        if (invalidStart || invalidEnd) {
          const message = invalidStart
            ? "Fragment names must start with the module name and end with `Fragment`. Expected name to start with `{{expected}}`, got `{{actual}}`."
            : "Fragment names must start with the module name and end with `Fragment`. Expected name to end with `Fragment` but got `{{actual}}`.";

          context.report({
            message,
            data: {
              expected: `${moduleName}Fragment`,
              actual: definitionName,
            },
            loc: getLoc(context, node, definition.name),
          });
        }
        break;
      }
    }
  });
};

module.exports = {
  meta: {
    fixable: "code",
    docs: {
      description:
        "Validates naming conventions of graphql queries, mutations, and fragments",
    },
  },
  create(context) {
    if (!shouldLint(context)) {
      return {};
    }
    return {
      CallExpression(node) {
        if (node.callee.name === "graphql") {
          const template = node.arguments?.[0];
          return template ? validateTaggedTemplate(template, context) : {};
        }
      },
    };
  },
};
