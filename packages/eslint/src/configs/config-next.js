const next = require("@next/eslint-plugin-next");

module.exports = {
  rules: {
    ...next.configs.recommended.rules,
    "@next/next/no-img-element": "off",
  },
  plugins: {
    "@next/next": next,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
