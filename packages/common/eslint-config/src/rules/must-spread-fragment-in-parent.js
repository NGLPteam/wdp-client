"use strict";

const { visit } = require("graphql");
const utils = require("./utils");

const ESLINT_DISABLE_COMMENT =
  "eslint-disable-next-line custom-rules/must-spread-fragment-in-parent";

const getGraphQLFragmentDefinitionName = (graphQLAST) => {
  let name = null;
  visit(graphQLAST, {
    FragmentDefinition(node) {
      name = node.name.value;
    },
  });
  return name;
};

const getGraphQLFragmentSpreads = (graphQLAST) => {
  const fragmentSpreads = {};
  visit(graphQLAST, {
    FragmentSpread(node, key, parent, path, ancestors) {
      for (const ancestorNode of ancestors) {
        if (ancestorNode.kind === "OperationDefinition") {
          if (
            ancestorNode.operation === "mutation" ||
            ancestorNode.operation === "subscription"
          ) {
            return;
          }
        }
      }
      if (
        utils.hasPrecedingEslintDisableComment(node, ESLINT_DISABLE_COMMENT)
      ) {
        return;
      }
      fragmentSpreads[node.name.value] = node;
    },
  });
  return fragmentSpreads;
};

const validateFragmentSpreads = (
  literal,
  foundImportedModules,
  fragmentsInTheSameModule,
  context
) => {
  const { node, graphQLAST } = literal ?? {};
  const queriedFragments = getGraphQLFragmentSpreads(graphQLAST);

  for (const fragment in queriedFragments) {
    const matchedModuleName = foundImportedModules.find((name) =>
      fragment.startsWith(name)
    );
    if (!matchedModuleName && !fragmentsInTheSameModule.includes(fragment)) {
      context.report({
        node,
        loc: utils.getLoc(context, node, queriedFragments[fragment]),
        data: {
          name: graphQLAST.definitions[0].name?.value,
          fragment: fragment,
        },
        message: `\`{{ name }}\` spreads the fragment \`{{ fragment }}\` but this module does not use it directly. If the component that needs this information is deeper in the tree, that component's parent should spread this fragment in its own fragment or query. When using destructured imports, this rule may flag a fragment in error when the name of the import does not match the fragment/module name. Update the import name or disable the rule in these cases.`,
      });
    }
  }
};

module.exports = {
  meta: {
    docs: {
      description:
        "Requires that fragments are spread in the parent component for any component querying for graphql data, so data is not directly passed between components.",
    },
  },
  create(context) {
    const foundImportedModules = [];
    const graphqlLiterals = [];

    return {
      "Program:exit"(_node) {
        const fragmentsInTheSameModule = graphqlLiterals
          .map(({ graphQLAST }) => {
            const fragmentName = getGraphQLFragmentDefinitionName(graphQLAST);
            return fragmentName ?? null;
          })
          .filter(Boolean);

        graphqlLiterals.forEach((literal) =>
          validateFragmentSpreads(
            literal,
            foundImportedModules,
            fragmentsInTheSameModule,
            context
          )
        );
      },

      ImportDeclaration(node) {
        if (node.source.type === "Literal") {
          foundImportedModules.push(utils.getModuleName(node.source.value));
          if (node.specifiers?.length) {
            node.specifiers.forEach((s) => {
              foundImportedModules.push(s.imported?.name);
            });
          }
        }
      },

      // Allow dynamic imports like import(`test/${fileName}`); and (path) => import(path);
      ImportExpression(node) {
        if (node.source.type === "Literal") {
          foundImportedModules.push(utils.getModuleName(node.source.value));
        }
      },

      CallExpression(node) {
        if (node.callee.name === "require") {
          const [source] = node.arguments;
          if (source && source.type === "Literal") {
            foundImportedModules.push(utils.getModuleName(source.value));
          }
        }
        if (node.callee.name === "graphql") {
          const template = node.arguments?.[0];
          const graphQLAST = utils.getGraphQLAST(template);
          if (graphQLAST instanceof Error) {
            return;
          }
          graphqlLiterals.push({ node: template, graphQLAST });
        }
      },
    };
  },
};
