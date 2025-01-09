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

const colors = {
  neutral: {
    100: "#000000",
    90: "#232324",
    80: "#58585C",
    70: "#76767A",
    60: "#919196",
    40: "#BCBCC3",
    30: "#D0D0D6",
    20: "#E1E1E6",
    10: "#F0F0F5",
    "05": "#FAFAFC",
    "00": "#FFFFFF",
  },
  green: {
    DEFAULT: "#42A66A",
    dark: "#378556",
    tint: "#D7F5E3",
    alert: "#32784E",
  },
  red: {
    DEFAULT: "#E67067",
    dark: "#C94B42",
    tint: "#FAE3E1",
    alert: "#B2423B",
  },
  blue: {
    DEFAULT: "#6596E0",
    dark: "#4073BF",
    tint: "#DAE6F7",
    alert: "#3767AD",
  },
  custom: {
    cream: {
      80: "#45473F",
      70: "#606259",
      60: "#7D7F76",
      20: "#DEE0D6",
      10: "#F2F5EA",
    },
    blue: {
      80: "#394052",
      70: "#505A72",
      60: "#6B7794",
      20: "#D6D9E0",
      10: "#EAEDF5",
    },
    gray: {
      80: "#454547",
      70: "#606063",
      60: "#7E7E82",
      20: "#E1E1E5",
      10: "#F2F2F7",
    },
  },
};

module.exports = {
  pxPerRem,
  fluidScalePx,
  fluidScaleRem,
  minSpacing,
  colors,
};
