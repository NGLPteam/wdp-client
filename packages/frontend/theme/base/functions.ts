import { hexToHSLA } from "@wdp/lib/theme/functions";
import type { CSSVariableObj } from "./variables";

// Set color variables from colors object
export function setColorVars(colors: CSSVariableObj) {
  let styles = "";

  for (const [colorKey, colorKeyValues] of Object.entries(colors)) {
    // eslint-disable-next-line no-constant-condition
    const delimiter = colorKey === "neutral" ? "" : "-";
    for (const [key, hexColor] of Object.entries(colorKeyValues)) {
      styles += `
          --${colorKey}${delimiter}${key}: ${hexToHSLA(hexColor)};
        `;
    }
  }

  return `
    ${styles}
  `;
}

// Returns the palette object filtered by key name
export function getColorsByKey(keyStartsWith: string, palette: CSSVariableObj) {
  return Object.fromEntries(
    Object.entries(palette).filter(([key]) => key.startsWith(keyStartsWith)),
  );
}
