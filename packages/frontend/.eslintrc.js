require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: ["@wdp"],
  parserOptions: { tsconfigRootDir: __dirname },
};
