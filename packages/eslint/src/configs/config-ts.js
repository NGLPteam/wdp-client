const tsParser = require("@typescript-eslint/parser");
const globals = require("globals");
const unusedImports = require("eslint-plugin-unused-imports");
const { customRulesCode, customRules } = require("../rules");
const imports = require("eslint-plugin-import");

module.exports = {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: "./tsconfig.json",
    },
    // Any globals that we don't want to flag for no-undef can be added here
    globals: {
      ...globals.browser,
      ...globals.node,
      React: "false",
    },
  },
  plugins: {
    "unused-imports": unusedImports,
    import: imports,
    "custom-rules": {
      rules: customRulesCode,
    },
  },
  rules: {
    // Core ESLint rules
    "no-console": ["error", { allow: ["warn", "error", "debug", "info"] }],

    // Typescript rules
    "@typescript-eslint/no-unused-vars": [
      "error", 
      { 
        argsIgnorePattern: "^_", 
        ignoreRestSiblings: true,  
      }
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],

    // React rules
    "react-hooks/rules-of-hooks": ["warn"],
    "react/react-in-jsx-scope": ["off"],
    "react/display-name": ["off"],

    // Import rules
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [{ pattern: "@/**", group: "internal" }],
      },
    ],

    // Unused import rules
    "unused-imports/no-unused-imports": ["warn"],

    // Warn on link anchors until Next/Link is refactored
    "jsx-a11y/anchor-is-valid": ["warn"],

    // Custom rules
    ...customRules,
  },
};
