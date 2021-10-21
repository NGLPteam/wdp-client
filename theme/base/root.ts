// Root CSS variables
// --------------------
// Trying out HSL values for NGLP - these can easily be reverted back to HEX
import { css } from "styled-components";
import { fluidScale } from "theme/mixins/base";
import { pxToRem } from "../mixins/functions";
import {
  transition,
  colors,
  setColorVars,
  setZIndexVars,
} from "../base/variables";
import { hexToHSLA } from "../mixins/colors";

const { duration, timing } = transition.colorMode;

export default css`
  :root {
    /* z-indexes */
    ${setZIndexVars()}

    /* colors */
    ${setColorVars()}

    /* system colors */

    /* fonts */
    --font-face-base: "Karla", serif;
    --font-weight-base: 400;

    /* font weights */
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* font sizes */
    --font-size-base: 1rem;
    --line-height-base: ${pxToRem(20)};
    --font-size-sm: ${pxToRem(14)};

    /* label font sizes */
    --font-size-label-lg: ${pxToRem(15)};
    --line-height-label-lg: ${pxToRem(24)};
    --font-size-label-md: ${pxToRem(14)};
    --line-height-label-md: ${pxToRem(20)};
    --font-size-label-sm: ${pxToRem(13)};
    --line-height-label-sm: ${pxToRem(20)};

    /* header font sizes */
    --font-size-h1: ${pxToRem(30)};
    --line-height-h1: ${pxToRem(36)};
    --font-weight-h1: var(--font-weight-medium);
    --font-size-h2: ${pxToRem(22)};
    --line-height-h2: ${pxToRem(28)};
    --font-weight-h2: var(--font-weight-semibold);
    --font-size-h3: ${pxToRem(18)};
    --line-height-h3: ${pxToRem(24)};
    --font-weight-h3: var(--font-weight-medium);
    --font-size-h4: var(--font-size-base);
    --line-height-h4: var(--line-height-header);
    --font-weight-h4: var(--font-weight-semibold);
    --font-size-h5: var(--font-size-base);
    --line-height-h5: var(--line-height-header);
    --font-weight-h5: var(--font-weight-medium);
    --font-size-h6: var(--font-size-base);
    --line-height-h6: var(--line-height-header);
    --font-weight-h6: var(--font-weight-regular);

    /* font colors */
    --color: var(--neutral90);
    --color-light: var(--neutral70); /* Passes AA */
    --color-lighter: var(
      --neutral60
    ); /* AA+, Can pass under some circumstances */
    --color-dark: var(--neutral100);
    --header-color: var(--brand100);
    --color-error: var(--reddark);

    /* background colors */
    --background-color: var(--neutral00);
    --background-light: var(--brand10);

    /* default accent colors */
    --accent-color: var(--brand100);
    --accent-light: var(--brand90);
    --accent-lighter: var(--brand80);

    /* layout colors */
    --bg-color-base: var(--neutral00);
    --dialog-backdrop-background: ${hexToHSLA(colors.neutral[100], 0.75)};
    --light-glow-color: ${hexToHSLA(colors.brand[100], 0.2)};

    /* layout sizes and margins */
    --container-max: ${pxToRem(1000)};
    --container-column-margin: ${pxToRem(20)};

    /* layout grid */
    --grid-row-gap: ${pxToRem(16)};
    --grid-column-gap: ${pxToRem(16)};
    --grid-row-gap-sm: ${pxToRem(10)};
    --grid-column-gap-sm: ${pxToRem(10)};

    /* transitions */
    --base-duration: ${duration}s;
    --base-timing: ${timing};
    --border-transition: border ${duration}s ${timing};
    --color-transition: color ${duration}s ${timing};
    --background-transition: background ${duration}s ${timing};
    --opacity-transition: opacity ${duration}s ${timing};

    /* borders */
    --border-color: var(--neutral40);
    --border-radius-xs: ${pxToRem(4)};
    --border-radius-sm: ${pxToRem(6)};
    --border-radius-rg: ${pxToRem(8)};
    --border-radius-lg: ${pxToRem(10)};
    --border-radius-xlg: ${pxToRem(40)};

    /* padding */
    --base-padding: 4px;

    /* forms */
    --form-grid-column-gap: ${pxToRem(24)};
    --form-grid-row-gap: ${fluidScale("40px", "16px")};
    --form-grid-padding-top: var(--form-grid-row-gap);
    --form-grid-padding-bottom: ${pxToRem(60)};
    --form-grid-item-width: calc(50% - (var(--form-grid-column-gap) * 0.5));
    --form-grid-item-width-wide: 100%;

    /* buttons */
    --button-background: var(--background-light);

    /* form inputs */
    --input-border-color: var(--color-lighter);
    --input-border-hover-color: var(--accent-color);
    --input-background-color: var(--background-color);
    --input-border-radius: 0;
    --input-focus-background: var(--brand10);
    --input-placeholder-color: var(--color-light);
    --input-padding: 0 ${pxToRem(8)};
    --input-min-height: ${pxToRem(32)};

    /* loading */
    --loading-border-radius: ${pxToRem(10)};
  }
`;
