/** @type {import('tailwindcss').Config} */

const { pxToRem } = require("@castiron/style-mixins");
const { fluidScaleRem, fluidScalePx, colors } = require("./styles/helpers");

export const screens = {
  140: "1400px",
  120: "1280px",
  100: "1024px",
  80: "820px",
  70: "768px",
  60: "667px",
  50: "540px",
  30: "375px",
};

const maxWidth = {
  max: pxToRem("1440px"),
  wide: pxToRem("1159px"),
};

const spacing = {
  xl: pxToRem(40),
  lg: pxToRem(32),
  md: pxToRem(24),
  rg: pxToRem(16),
  sm: pxToRem(8),
  xs: pxToRem(6),
  xxs: pxToRem(4),
  container: {
    xxl: fluidScalePx("120px", "100px"),
    xl: fluidScalePx("100px", "80px"),
    lg: pxToRem(80),
    md: pxToRem(60),
    sm: pxToRem(36),
    xs: pxToRem(24),
    v: fluidScalePx("60px", "30px"),
    vSm: fluidScalePx("60px", "20px"),
  },
  gap: {
    column: {
      DEFAULT: pxToRem(16),
      xl: fluidScalePx("48px", "16px"),
      lg: pxToRem(36),
      sm: pxToRem(8),
    },
    row: {
      DEFAULT: pxToRem(16),
      xl: pxToRem(60),
      lg: pxToRem(30),
    },
  },
};

const borderRadius = {
  xs: pxToRem(6),
  sm: pxToRem(8),
  md: pxToRem(12),
  lg: pxToRem(20),
  xl: pxToRem(43),
};

const fontFamily = {
  heading: [
    "var(--font-face-header)",
    "sans-fallback",
    "Ilisarniq",
    "sans-serif",
  ],
  body: ["var(--font-face-base)", "sans-fallback", "Ilisarniq", "sans-serif"],
};

// [fontSize, lineHeight]
const fontSize = {
  h1: [
    fluidScaleRem("60px", "54px", 140, 70),
    fluidScalePx("66px", "54px", 140, 70),
  ],
  h2: [
    fluidScaleRem("46px", "28px", 140, 50),
    fluidScalePx("54px", "36px", 140, 50),
  ],
  h3: [
    fluidScaleRem("28px", "20px", 140, 50),
    fluidScalePx("36px", "24px", 140, 50),
  ],
  h4: [
    fluidScaleRem("20px", "18px", 140, 50),
    fluidScalePx("24px", "22px", 140, 50),
  ],
  base: [pxToRem(16), 1.375],
  baseSm: [pxToRem(14), 1.425],
  labelLg: [pxToRem(14), 1.575],
  labelSm: [pxToRem(12), 1.5],
  labelMix: [pxToRem(13), 1.3],
};

const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const transitionDuration = {
  DEFAULT: "170ms",
};

const transitionTimingFunction = {
  DEFAULT: "ease-in",
};

const zIndex = {
  drawer: 200,
  "drawer-backdrop": 199,
  modal: 300,
  dropdown: 400,
};

export const boxShadow = {
  popUp: "0px 12px 24px -12px rgba(0, 0, 0, 0.3)",
  focusGlow: "0px 0px 6px rgba(35, 35, 36, 0.2)",
  focusShadow: "0px 0px 6px rgba(35, 35, 36, 0.2)",
};

module.exports = {
  theme: {
    screens,
    maxWidth,
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    zIndex,
    boxShadow,
    extend: {
      spacing,
      borderRadius,
      transitionDuration,
      transitionTimingFunction,
    },
  },
  plugins: [],
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
};
