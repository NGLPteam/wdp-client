module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["components/scaffolding/**"],
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
    "relay/must-colocate-fragment-spreads": "warn",
  },
  overrides: [
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-tabindex": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "no-console": 0,
        "import/no-anonymous-default-export": 0,
      },
    },
  ],
  plugins: ["@typescript-eslint", "relay"],
  extends: ["next", "@castiron", "plugin:@typescript-eslint/recommended"],
};
