module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["components/scaffolding/**", "**/*.stories.tsx"],
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
    // Remove once fixed
    camelcase: 1,
  },
  plugins: ["@typescript-eslint"],
  extends: ["@castiron", "plugin:@typescript-eslint/recommended"],
};
