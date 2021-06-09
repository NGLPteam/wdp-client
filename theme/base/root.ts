// Root CSS variables
// --------------------
// Trying out HSL values for NGLP - these can easily be reverted back to HEX
import { hexToHSL } from "../mixins/colors";
import { pxToRem } from "../mixins/functions";

export default `
  :root {
    /* brand colors - these may change based on backend values */
    --brand100: ${hexToHSL("#00658F")};
    --brand90: ${hexToHSL("#006E9B")};
    --brand70: ${hexToHSL("#3588AA")};
    --brand50: ${hexToHSL("#6DACC7")};
    --brand30: ${hexToHSL("#B6D6E3")};
    --brand20: ${hexToHSL("#D1E7F0")};
    --brand10: ${hexToHSL("#E9F3F7")};

    /* neutral colors */
    --netural100: ${hexToHSL("#000000")};
    --netural90: ${hexToHSL("#232324")};
    --netural70: ${hexToHSL("#67676B")};
    --netural60: ${hexToHSL("#87878C")};
    --netural50: ${hexToHSL("#A5A5AB")};
    --netural40: ${hexToHSL("#BCBCC3")};
    --netural20: ${hexToHSL("#E1E1E5")};
    --netural10: ${hexToHSL("#F0F0F5")};
    --netural05: ${hexToHSL("#FAFAFC")};
    --netural00: ${hexToHSL("#FFFFFF")};

    /* system colors */
    --green-dark: ${hexToHSL("#3E9460")};
    --green: ${hexToHSL("#48B072")};
    --green-tint: ${hexToHSL("#D9F7E5")};
    --red-dark: ${hexToHSL("#DD5A51")};
    --red: ${hexToHSL("#E5857E")};
    --red-tint: ${hexToHSL("#F7DBD9")};

    /* fonts */
    --font-face-base: "Karla", sans-serif;

    /* font sizes */
    --font-size-base: 1rem;
    --font-size-h1: ${pxToRem("30px")};
    --line-height-h1: ${pxToRem("36px")};
    --font-size-h2: ${pxToRem("22px")};
    --line-height-h2: ${pxToRem("28px")};
    --font-size-h3: ${pxToRem("18px")};
    --line-height-h3: ${pxToRem("24px")};

    /* font colors */
    --color-base: var(--netural90);

    /* layout colors */
    --bg-color-base: var(--neutral00);

    /* layout sizes */
    --container-max: 1000px;
    --grid-column-gap: ${pxToRem("16px")}
  }
`;
