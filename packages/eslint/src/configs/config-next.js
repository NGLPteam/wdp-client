const next = require("@next/eslint-plugin-next");

module.exports = {
  rules: {
    ...next.configs.recommended.rules,
  },
  plugins: {
    "@next/next": next,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
