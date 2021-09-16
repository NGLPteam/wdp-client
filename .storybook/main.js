const path = require("path");

module.exports = {
  stories: ["../@(components|theme)/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-addon-themes",
    "storybook-addon-next-router",
    "storybook-react-i18next",
    "@storybook/addon-storysource",
    "storybook-addon-designs",
    "storybook-addon-grid/preset",
    "storybook-addon-pseudo-states",
    "aria-live-storybook-addon",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen",
    // reactDocgen: "react-docgen-typescript",
    // reactDocgenTypescriptOptions: {
    //   shouldExtractLiteralValuesFromEnum: true,
    //   propFilter: (prop) =>
    //     prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    // },
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    config.resolve.alias = {
      ...config.resolve.alias,
      "@/components": path.resolve(__dirname, "../components"),
      "@/theme": path.resolve(__dirname, "../theme"),
    };

    return config;
  },
};
