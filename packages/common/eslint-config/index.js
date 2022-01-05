// See https://www.npmjs.com/package/@rushstack/eslint-patch
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    // "unused-imports/no-unused-imports": 2,
    // Turned off for this project
    "react/display-name": 0,
    // No prop-types in this project
    "react/prop-types": 0,
    // This is throwing inaccurate errors
    "no-use-before-define": 0,
    // Needs to be reviewed before turning back on
    "@typescript-eslint/explicit-module-boundary-types": 0,
    // let next/link package handle anchor attributes
    "jsx-a11y/anchor-is-valid": 0,
    // next/link handles the href, so anchors without href are still interactive
    "jsx-a11y/no-noninteractive-tabindex": ["error", { tags: ["a"] }],
    // Sometimes I want to keep a var around.
    "@typescript-eslint/no-unused-vars": [
      1,
      {
        args: "after-used",
        ignoreRestSiblings: true,
        varsIgnorePattern: "PropTypes|React",
        argsIgnorePattern: "[iI]gnored",
      },
    ],
    // Allow console.info & .warn
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    // Sort imports by path
    "import/order": [
      "warn",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    // The alt attribute on an Image component is in the image object
    // Stop false positives on the Image component
    "jsx-a11y/alt-text": [
      2,
      {
        elements: ["img", "object", "area", 'input[type="image"]'],
        object: ["Object"],
        area: ["Area"],
        'input[type="image"]': ["InputImage"],
      },
    ],
    // Can only handle direct imports
    "relay/must-colocate-fragment-spreads": 0,
    "relay/no-future-added-value": 0,
    "relay/unused-fields": 0,
    "relay/generated-flow-types": 0,
  },
  // Special plugins and extensions for ts
  plugins: ["@typescript-eslint", "relay"],
  extends: [
    "@castiron",
    "next",
    "plugin:@typescript-eslint/recommended",
    "plugin:relay/recommended",
  ],
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-tabindex": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-console": 0,
        "import/no-anonymous-default-export": 0,
      },
    },
    {
      files: ["**/*.js"],
      parser: "@babel/eslint-parser",
      parserOptions: {
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
          plugins: [
            "babel-plugin-styled-components",
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-class-properties",
          ],
        },
      },
      env: {
        browser: true,
      },
      extends: ["@castiron", "next"],
    },
  ],
};
