"use strict";

const path = require("path");

const graphql = require("graphql");
const parse = graphql.parse;

function isGraphQLTemplate(node) {
  return (
    node.tag.type === "Identifier" &&
    node.tag.name === "graphql" &&
    node.quasi.quasis.length === 1
  );
}

function getGraphQLAST(taggedTemplateExpression) {
  if (taggedTemplateExpression.quasis.length !== 1) {
    // has substitutions, covered by graphql-syntax rule
    return null;
  }
  const quasi = taggedTemplateExpression.quasis[0];
  try {
    return parse(quasi.value.cooked);
  } catch (error) {
    // Invalid syntax; this error will be flagged by graphql-syntax-errors rule
    return error;
  }
}

/**
 * Returns a loc object for error reporting.
 */
function getLoc(context, templateNode, graphQLNode) {
  const startAndEnd = getRange(context, templateNode, graphQLNode);
  const start = startAndEnd[0];
  const end = startAndEnd[1];
  return {
    start: context.sourceCode.getLocFromIndex(start),
    end: context.sourceCode.getLocFromIndex(end),
  };
}

// Copied directly from Relay
function getModuleName(filePath) {
  // index.js -> index
  // index.js.flow -> index.js
  let filename = path.basename(filePath, path.extname(filePath));

  // index.js -> index (when extension has multiple segments)
  // index.react -> index (when extension has multiple segments)
  filename = filename.replace(/(\.(?!ios|android)[_a-zA-Z0-9\\-]+)+/g, "");

  // /path/to/button/index.js -> button
  let moduleName =
    filename === "index" ? path.basename(path.dirname(filePath)) : filename;

  // foo-bar -> fooBar
  // Relay compatibility mode splits on _, so we can't use that here.
  moduleName = moduleName.replace(/[^a-zA-Z0-9]+(\w?)/g, (match, next) =>
    next.toUpperCase()
  );

  return moduleName;
}

/**
 * Returns a range object for auto fixers.
 */
function getRange(context, templateNode, graphQLNode) {
  const graphQLStart = templateNode.quasis[0].range[0] + 1;
  return [
    graphQLStart + graphQLNode.loc.start,
    graphQLStart + graphQLNode.loc.end,
  ];
}

function shouldLint(context) {
  return /graphql/i.test(context.sourceCode.text);
}

function hasPrecedingEslintDisableComment(node, commentText) {
  const prevNode = node.loc.startToken.prev;
  return prevNode.kind === "Comment" && prevNode.value.startsWith(commentText);
}

module.exports = {
  getGraphQLAST: getGraphQLAST,
  getLoc: getLoc,
  getModuleName: getModuleName,
  getRange: getRange,
  hasPrecedingEslintDisableComment: hasPrecedingEslintDisableComment,
  shouldLint: shouldLint,
  isGraphQLTemplate: isGraphQLTemplate,
};
