import { pxToRem } from "@wdp/lib/theme/functions";

export type CSSVariableObj = Record<string, string>;

export const baseSansSerifFont = "Arial, sans-serif";

export const baseSerifFont = "Georgia, serif";

// Base colors
export const baseColors = {
  neutral100: "#000000",
  neutral90: "#232324",
  neutral80: "#58585C",
  neutral70: "#76767A",
  neutral60: "#919196",
  neutral40: "#BCBCC3",
  neutral30: "#D0D0D6",
  neutral20: "#E1E1E6",
  neutral10: "#F0F0F5",
  neutral05: "#FAFAFC",
  neutral00: "#FFFFFF",
  greenDark: "#378556",
  greenAA: "#42A66A",
  greenTint: "#D7F5E3",
  redDark: "#C94B42",
  redAA: "#E67067",
  redTint: "#FAE3E1",
  blueDark: "#4073BF",
  blueAA: "#6596E0",
  blueTint: "#DAE6F7",
};

// Custom colors, color choice selected in admin
export const customColors = {
  cream80: "#45473F",
  cream70: "#606259",
  cream60: "#7D7F76",
  cream20: "#DEE0D6",
  cream10: "#F2F5EA",
  blue80: "#394052",
  blue70: "#505A72",
  blue60: "#6B7794",
  blue20: "#D6D9E0",
  blue10: "#EAEDF5",
  gray80: "#454547",
  gray70: "#606063",
  gray60: "#7E7E82",
  gray20: "#E1E1E5",
  gray10: "#F2F2F7",
};

// Fonts
// Base font styles are shared between all type styles

// Z-Index
export const zIndex = {
  drawer: 200,
  "drawer-backdrop": 199,
  modal: 300,
  dropdown: 400,
};

// Breakpoints
export const breakpoints = {
  140: "1400px",
  120: "1280px",
  100: "1024px",
  80: "820px",
  70: "768px",
  60: "667px",
  50: "540px",
  30: "375px",
};

// Container widths
export const containerWidths = {
  max: "1440px",
  wide: "1159px",
};

// Border radius
export const borderRadius = {
  xs: pxToRem(6),
  sm: pxToRem(8),
  md: pxToRem(12),
  lg: pxToRem(20),
  xlg: pxToRem(43),
};

// Box shadows
export const boxShadow = {
  popUp: "0px 12px 24px -12px rgba(0, 0, 0, 0.3)",
  focusGlow: "0px 0px 6px rgba(35, 35, 36, 0.2)",
  focusShadow: "0px 0px 6px rgba(35, 35, 36, 0.2)",
};

// Transitions
export const transition = {
  color: "color 0.17s ease-in",
  background: "background 0.17s ease-in",
  opacity: "opacity 0.17s ease-in",
  border: "border 0.17s ease-in",
  boxShadow: "box-shadow 0.17s ease-in",
};
