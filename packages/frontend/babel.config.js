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
  ],
};
