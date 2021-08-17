import { css } from "styled-components";
import {
  aGlow,
  aBgDark,
  aBgLight,
  aBaseInput,
  aLink,
  aHidden,
} from "../mixins/appearance";
// Appearance
// --------------------

// Appearance classes contain primarily texture parameters: background-color, transparency, borders, etc.
// Appearance classes can define a CSS variable for all children, such as --secondary-color
// These should be limited to appearance-related properties only.
// Classes are prefixed with `a-`.

export default css`
  .a-hidden {
    ${aHidden}
  }

  .a-focus-dark:focus-visible {
    ${aGlow("darkMode")}
  }

  .a-focus:focus-visible {
    ${aGlow("lightMode")}
  }

  .a-bg-neutral00 {
    ${aBgLight("neutral00")}
  }

  .a-bg-brand10 {
    ${aBgLight("brand10")}
  }

  .a-bg-brand100,
  .a-bg-brand90 {
    ${aBgDark("brand100")}
  }

  .a-bg-brand90 {
    --background-color: var(--brand90);
    --color: var(--brand10);
    --color-light: var(--brand10);
    --color-lighter: var(--brand20);
  }

  .a-input {
    ${aBaseInput()}
  }

  .a-color-accent {
    color: var(--accent-color);
  }

  .a-color-light {
    color: var(--color-light);
  }

  .a-color-lighter {
    color: var(--color-lighter);
  }

  .a-link {
    ${aLink()}
  }
`;
