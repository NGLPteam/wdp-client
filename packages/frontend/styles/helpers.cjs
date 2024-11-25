const {
  stripUnit,
  pxToRem,
  fluidScalePxBase,
  fluidScaleRemBase,
} = require("@castiron/style-mixins");

const pxPerRem = 16;

const minSpacing = "24px";

function fluidScalePx(max, min, maxVw = "1400px", minVw = "375px") {
  if (max === min) return `${max}`;
  return fluidScalePxBase(max, min, maxVw, minVw);
}

function fluidScaleRem(
  maxPx,
  minPx,
  maxVwRem = "87.5rem",
  minVwRem = "23.4375rem"
) {
  return fluidScaleRemBase(maxPx, minPx, maxVwRem, minVwRem, pxPerRem);
}

module.exports = {
  pxPerRem,
  fluidScalePx,
  fluidScaleRem,
  minSpacing,
};
