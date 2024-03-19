"use strict";

const path = require("path");

const { getGraphQLAST, getLoc, shouldLint } = require("./utils");

const validateSyntax = (template, context) => {
  if (template.quasis.length !== 1) {
    context.report({
      node: template,
      message: "graphql templates do not support ${...} interpolations.",
    });
    return;
  }

  const ast = getGraphQLAST(template);

  if (ast instanceof Error) {
    context.report({
      node: template,
      message: "{{message}}",
      data: { message: ast.message },
    });
    return;
  }

  if (ast.definitions.length !== 1) {
    context.report({
      node: template,
      message: "graphql templates can only contain a single definition.",
    });
  } else if (!ast.definitions[0].name) {
    context.report({
      message: "Operations in graphql tags require a name.",
      loc: getLoc(context, template, ast.definitions[0]),
    });
  }
};

module.exports = {
  meta: {
    docs: {
      description: "Validates the syntax of graphql(`...`) templates.",
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
          return template ? validateSyntax(template, context) : {};
        }
      },
    };
  },
};
