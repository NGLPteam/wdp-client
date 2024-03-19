const ruleTester = require("./ruleTester");
const fragmentSpreadsRule = require("../rules/must-spread-fragment-in-parent");

function unusedFieldsWarning(fragment, literal) {
  return `\`${literal}\` spreads the fragment \`${fragment}\` but this module does not use it directly. If the component that needs this information is deeper in the tree, that component's parent should spread this fragment in its own fragment or query.\n When using destructured imports, this rule may flag a fragment in error when the name of the import does not match the fragment/module name. Update the import name or disable the rule in these cases.`;
}

const testFragmentSpreads = ruleTester.run(
  "must-spread-fragment-in-parent",
  fragmentSpreadsRule,
  {
    valid: [
      `
      import TestComponent from '../shared/TestComponent.js';
      graphql(\`fragment PageFragment on Page {
        ...TestComponentFragment
      }\`);
      `,
      `
      const TestComponent = require('../shared/TestComponent.js');
      graphql(\`query PageQuery {
        ...TestComponentFragment
      }\`);
      `,
    ],
    invalid: [
      {
        code: `
        graphql(\`fragment PageFragment on Page { ...ComponentFragment }\`);
        `,
        errors: [
          {
            message: unusedFieldsWarning("ComponentFragment", "PageFragment"),
            line: 2,
          },
        ],
      },
    ],
  }
);

module.exports = testFragmentSpreads;
