import { css } from "styled-components";
import { aGlow } from "theme/mixins/appearance";
// Appearance
// --------------------

// Appearance classes contain primarily texture parameters: background-color, transparency, borders, etc.
// Appearance classes can define a CSS variable for all children, such as --secondary-color
// These should be limited to appearance-related properties only.
// Classes are prefixed with `a-`.

export default css`
  .a-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .a-focus-dark:focus-visible {
    ${aGlow("darkMode")}
  }

  .a-focus:focus-visible {
    ${aGlow("lightMode")}
  }
`;
