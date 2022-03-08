module.exports = {
  presets: ["next/babel"],
  plugins: [
    "relay",
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
      },
    ],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
  ],
};
