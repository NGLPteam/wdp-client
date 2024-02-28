const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const prettier = require("eslint-plugin-prettier");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = {
  rules: {
    ...js.configs.recommended.rules,
    ...ts.configs.recommended.rules,
    ...ts.configs["eslint-recommended"].rules,
    ...prettier.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    ...jsxA11y.configs.recommended.rules,
  },
  plugins: {
    prettier,
    "jsx-a11y": jsxA11y,
    "@typescript-eslint": ts,
    "react-hooks": reactHooks,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
