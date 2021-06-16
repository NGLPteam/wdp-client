// Base Appearance
// --------------------

// Appearance base styles should be limited to appearance-related properties only.
// Examples: color, fill, border
import { css } from "styled-components";

export default css`
  body {
    color: var(--color-base);
    background-color: var(--bg-color-base);
  }

  ul,
  ol {
    list-style-position: inside;
  }
`;
