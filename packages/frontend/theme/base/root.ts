import { css } from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { baseColors, customColors, zIndex } from "./variables";
import { getColorsByKey } from "./functions";

function setCustomColors(colorName: string) {
  const colors = getColorsByKey(colorName, customColors);

  if (colors) {
    return Object.entries(colors).map(
      ([key, value]) => `--${key.replace(colorName, "color-custom")}: ${value};`
    );
  }
}

function setBaseColors() {
  return Object.entries(baseColors).map(
    ([key, value]) => `--color-base-${key}: ${value};`
  );
}

export const baseFontStyles = css`
  --font-face-header: sans-serif;
  --font-size-h1: 60px;
  --line-height-h1: 66px;
  --font-size-h2: 46px;
  --line-height-h2: 54px;
  --font-size-h3: 28px;
  --line-height-h3: 36px;
  --font-size-h4: 20px;
  --line-height-h4: 24px;
  --font-face-base: sans-serif;
  --font-size-base: 16px;
  --line-height-base: 22px;
  --font-size-base-sm: 14px;
  --line-height-base-sm: 20px;
  --font-size-label-lg: 14px;
  --font-weight-label-lg: 500;
  --line-height-label-lg: 22px;
  --font-size-label-sm: 12px;
  --font-weight-label-sm: 500;
  --line-height-label-sm: 18px;
  --font-size-label-mix: 13px;
  --font-weight-label-mix: 500;
  --line-height-label-mix: 17px;
`;

// Font style #1 - will overwrite any base font styles
export const fontStyle1 = css`
  --font-face-header: Ilisarniq, sans-serif;
  --letter-spacing-h1: -1.5px;
  --letter-spacing-h2: -1px;
  --letter-spacing-h3: -0.5px;
  --font-face-base: Ilisarniq, sans-serif;
  --letter-spacing-label-lg: 1.25px;
  --letter-spacing-label-sm: 1.25px;
  --letter-spacing-label-mix: 0.25px;
`;

// Font style #2 - will overwrite any base font styles
export const fontStyle2 = css`
  --font-face-header: Switzer, sans-serif;
  --letter-spacing-h1: 0.25;
  --letter-spacing-h2: 0.8;
  --letter-spacing-h3: 0.5px;
  --letter-spacing-h4: 0.5px;
  --font-face-base: Switzer, sans-serif;
  --letter-spacing-base: 0.5px;
  --letter-spacing-label-lg: 1.75px;
  --letter-spacing-label-sm: 1.75px;
  --letter-spacing-label-mix: 0.5px;
`;

// Font style #3 - will overwrite any base font styles
export const fontStyle3 = css`
  --font-face-header: Sentient, serif;
  --letter-spacing-h1: -0.75px;
  --letter-spacing-h2: -0.5px;
  --letter-spacing-h3: normal;
  --letter-spacing-h4: normal;
  --font-face-base: Libre Franklin, sans-serif;
  --letter-spacing-base: 0.25px;
  --letter-spacing-base-sm: 0.25px;
  --font-size-label-lg: 13.5px;
  --line-height-label-lg: 22px;
  --letter-spacing-label-lg: 1.25px;
  --font-size-label-sm: 11.5px;
  --line-height-label-sm: 18px;
  --letter-spacing-label-sm: 1.25px;
  --font-size-label-mix: 13px;
  --line-height-label-mix: 17px;
  --letter-spacing-label-mix: 0.25px;
`;

export default css`
  :root {
    ${setBaseColors()}

    /* custom theme color */
    ${({ theme }) =>
      theme && theme.colorStyle
        ? setCustomColors(theme.colorStyle)
        : setCustomColors("cream")}

    /* base font styles */
    ${baseFontStyles}

    /* theme font styles */
    ${({ theme }) => {
      if (!theme) return fontStyle1;

      switch (theme.fontStyle) {
        case "fontStyle2":
          return fontStyle2;

        case "fontStyle3":
          return fontStyle3;

        default:
          return fontStyle1;
      }
    }}

    /* text color */
    --color-base: ${baseColors.neutral90};
    --color-light: ${baseColors.neutral80};
    --color-lighter: ${baseColors.neutral70};

    /* font weights */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* grid */
    --grid-column-gap: 16px;
    --grid-row-gap: 16px;

    /* borders */
    --border-color: ${baseColors.neutral70};

    /* buttons */
    --button-primary-bg-color: ${baseColors.neutral90};
    --button-primary-text-color: ${baseColors.neutral00};
    --button-secondary-bg-color: var(--color-custom10);
    --button-secondary-text-color: ${baseColors.neutral90};

    /* container */
    --container-padding-xlg: 120px;
    --container-padding-lg: 61px;
    --container-padding-sm: 36px;

    /* dropdown */
    --dropdown-background: ${baseColors.neutral00};
    --z-index-dropdown: ${zIndex.dropdown};

    /* padding */
    --padding-lg: ${pxToRem(32)};
    --padding-md: ${pxToRem(24)};
    --padding-rg: ${pxToRem(16)};
    --padding-sm: ${pxToRem(8)};
    --padding-xs: ${pxToRem(6)};
  }
`;
