const path = require("path");
const {
  fluidScaleRem: fluidScaleRemBase,
  fluidScalePx: fluidScalePxBase,
} = require("./styles/helpers.cjs");

module.exports = {
  // If any of these plugins are removed, they should also be removed from package.json
  // and from the .depcheckrc ignores configuration.
  plugins: {
    "postcss-mixins": {
      mixinsDir: path.join(__dirname, "./styles/mixins"),
      mixins: {
        fluidScaleRem: function (
          mixin,
          property,
          max,
          min,
          maxBreak,
          minBreak
        ) {
          const scale = fluidScaleRemBase(max, min, maxBreak, minBreak);
          return { [property]: scale };
        },
        fluidScalePx: function (mixin, property, max, min, maxBreak, minBreak) {
          const scale = fluidScalePxBase(max, min, maxBreak, minBreak);
          return { [property]: scale };
        },
      },
    },
    "postcss-import": {},
    "tailwindcss/nesting": require("postcss-nested")({
      bubble: ["container", "starting-style"],
    }),
    tailwindcss: { config: path.join(__dirname, "./tailwind.config.js") },
    "@csstools/postcss-oklab-function": { preserve: true },
    autoprefixer: {},
    "postcss-assign-layer": [
      { include: "**/*.module.css", layerName: "meru-components" },
    ],
  },
};
