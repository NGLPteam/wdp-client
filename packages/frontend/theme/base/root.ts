import { css } from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import {
  baseColors,
  baseSansSerifFont,
  baseSerifFont,
  borderRadius,
  customColors,
  zIndex,
} from "./variables";
import { getColorsByKey } from "./functions";
import { fluidScale } from "theme/mixins";

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

// The font size shrinks to one size below on mobile
// ie, h1 becomes an h2, h2 becomes an h3, etc.
// h4 says the same.
export const baseSansSerifFontStyles = css`
  --font-face-header: Ilisarniq, ${baseSansSerifFont};
  --font-size-h1: ${fluidScale("60px", "54px")};
  --line-height-h1: ${fluidScale("66px", "54px")};
  --font-size-h2: ${fluidScale("46px", "28px")};
  --line-height-h2: ${fluidScale("54px", "36px")};
  --font-size-h3: ${fluidScale("28px", "20px")};
  --line-height-h3: ${fluidScale("36px", "24px")};
  --font-size-h4: 20px;
  --line-height-h4: 24px;
  --font-face-base: Ilisarniq, ${baseSansSerifFont};
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
  --font-face-header: Ilisarniq, ${baseSansSerifFont};
  --letter-spacing-h1: -1.5px;
  --letter-spacing-h2: -1px;
  --letter-spacing-h3: -0.5px;
  --font-face-base: Ilisarniq, ${baseSansSerifFont};
  --letter-spacing-label-lg: 1.25px;
  --letter-spacing-label-sm: 1.25px;
  --letter-spacing-label-mix: 0.25px;
`;

// Font style #2 - will overwrite any base font styles
export const fontStyle2 = css`
  --font-face-header: Switzer, ${baseSansSerifFont};
  --letter-spacing-h1: 0.25;
  --letter-spacing-h2: 0.8;
  --letter-spacing-h3: 0.5px;
  --letter-spacing-h4: 0.5px;
  --font-face-base: Switzer, ${baseSansSerifFont};
  --letter-spacing-base: 0.5px;
  --letter-spacing-label-lg: 1.75px;
  --letter-spacing-label-sm: 1.75px;
  --letter-spacing-label-mix: 0.5px;
`;

// Font style #3 - will overwrite any base font styles
export const fontStyle3 = css`
  --font-face-header: Sentient, ${baseSerifFont};
  --letter-spacing-h1: -0.75px;
  --letter-spacing-h2: -0.5px;
  --letter-spacing-h3: normal;
  --letter-spacing-h4: normal;
  --font-face-base: Libre Franklin, ${baseSansSerifFont};
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

    /* theme color styles */
    ${({ theme }) => {
      if (!theme) return setCustomColors("cream");

      switch (theme.colorStyle) {
        case "blue":
        case "cream":
          return setCustomColors(theme.colorStyle);

        default:
          return setCustomColors("gray");
      }
    }}

    /* base font styles */
    ${baseSansSerifFontStyles}

    /* theme font styles */
    ${({ theme }) => {
      if (!theme) return fontStyle1;

      switch (theme.fontStyle) {
        case "style2":
          return fontStyle2;

        case "style3":
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
    --grid-column-gap-xl: ${fluidScale("48px", "16px")};
    --grid-column-gap-lg: ${pxToRem(36)};
    --grid-column-gap: ${pxToRem(16)};
    --grid-column-gap-sm: ${pxToRem(8)};
    --grid-row-gap: ${pxToRem(16)};
    --grid-row-gap-lg: ${pxToRem(30)};
    --grid-row-gap-xl: ${pxToRem(60)};

    /* borders */
    --border-color: ${baseColors.neutral70};

    /* buttons */
    --button-primary-bg-color: ${baseColors.neutral90};
    --button-primary-bg-hover-color: ${baseColors.neutral70};
    --button-primary-bg-focus-color: ${baseColors.neutral60};
    --button-primary-text-color: ${baseColors.neutral00};
    --button-primary-text-hover-color: ${baseColors.neutral00};
    --button-secondary-bg-color: var(--color-custom10);
    --button-secondary-bg-hover-color: var(--color-custom80);
    --button-secondary-bg-focus-color: var(--color-custom20);
    --button-secondary-text-color: ${baseColors.neutral90};
    --button-secondary-text-hover-color: ${baseColors.neutral00};

    /* container */
    --container-padding-xxl: ${fluidScale("120px", "100px")};
    --container-padding-xl: ${fluidScale("100px", "80px")};
    --container-padding-lg: ${pxToRem(80)};
    --container-padding-md: ${pxToRem(60)};
    --container-padding-sm: ${pxToRem(36)};
    --container-padding-xs: ${pxToRem(24)};
    --container-v-padding: ${fluidScale("60px", "30px")};
    --container-v-padding-sm: ${fluidScale("60px", "20px")};

    @media print {
      --container-padding-xxl: ${pxToRem(60)};
      --container-padding-xl: ${pxToRem(50)};
      --container-padding-lg: ${pxToRem(40)};
      --container-padding-md: ${pxToRem(30)};
      --container-padding-sm: ${pxToRem(18)};
      --container-padding-xs: ${pxToRem(12)};
      --container-v-padding: 0;
      --container-v-padding-sm: 0;
    }

    /* dropdown */
    --dropdown-background: ${baseColors.neutral00};
    ${Object.entries(zIndex).map(
      ([key, value]) => `
      --z-index-${key}: ${value};
    `
    )}

    /* border radius */
    ${Object.entries(borderRadius).map(
      ([key, value]) => `
      --border-radius-${key}: ${value};
    `
    )}

    /* padding */
    --padding-xl: ${pxToRem(40)};
    --padding-lg: ${pxToRem(32)};
    --padding-md: ${pxToRem(24)};
    --padding-rg: ${pxToRem(16)};
    --padding-sm: ${pxToRem(8)};
    --padding-xs: ${pxToRem(6)};
    --padding-xxs: ${pxToRem(4)};

    /* focus */
    --border-color-focus: ${baseColors.neutral90};
  }
`;
