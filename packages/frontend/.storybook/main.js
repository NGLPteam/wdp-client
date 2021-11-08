const path = require("path");

module.exports = {
  stories: ["../@(components|theme)/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen",
  },

  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "../../node_modules",
    ];
    config.resolve.alias["@/components"] = path.resolve(
      __dirname,
      "../components"
    );
    config.resolve.alias["@/theme"] = path.resolve(__dirname, "../theme");
    return config;
  },
};
