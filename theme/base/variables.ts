import { css } from "styled-components";
import { hexToHSL } from "theme/mixins/colors";

export const transition = {
  colorMode: {
    duration: 0.2,
    timing: "ease-in",
  },
};

export const colors = {
  brand: {
    100: "#00658F",
    90: "#006E9B",
    70: "#3588AA",
    50: "#6DACC7",
    30: "#B6D6E3",
    20: "#D1E7F0",
    10: "#E9F3F7",
  },
  neutral: {
    100: "#000000",
    90: "#232324",
    70: "#67676B",
    60: "#87878C",
    50: "#A5A5AB",
    40: "#BCBCC3",
    20: "#E1E1E5",
    10: "#F0F0F5",
    "05": "#FAFAFC",
    "00": "#FFFFFF",
  },
  green: {
    dark: "#3E9460",
    aa: "#48B072",
    tint: "#D9F7E5",
  },
  red: {
    dark: "#DD5A51",
    aa: "#E5857E",
    tint: "#F7DBD9",
  },
};

// Set color variables from colors object
export function createColors() {
  let styles = "";

  for (const [colorKey, colorKeyValues] of Object.entries(colors)) {
    // eslint-disable-next-line no-constant-condition
    const delimiter = colorKey === "neutral" || "brand" ? "" : "-";
    for (const [key, hexColor] of Object.entries(colorKeyValues)) {
      styles += `
        --${colorKey}${delimiter}${key}: ${hexToHSL(hexColor)};
      `;
    }
  }

  return css`
    ${styles}
  `;
}

export const breakpoints = {
  140: "1400px",
  120: "1280px",
  70: "768px",
  30: "375px",
};
