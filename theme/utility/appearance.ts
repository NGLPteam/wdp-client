import { css } from "styled-components";
import { aGlow, aBgDark, aBgLight, aBaseInput } from "../mixins/appearance";
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

  .a-bg-neutral00,
  .a-bg-brand10 {
    ${aBgLight("neutral00")}
  }

  .a-bg-brand10 {
    --background-color: var(--brand10);
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
`;
