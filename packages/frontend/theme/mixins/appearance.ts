import { css } from "styled-components";
import { transition } from "../base/variables";

// The box shadow's line height should be the same - .07em,
// but it's placement changes based on the font style
function getBoxShadow(fontStyle?: string): string {
  switch (fontStyle) {
    case "style3":
      return "inset 0 -0.11em 0 0 var(--background-color), inset 0 -0.18em 0 0 var(--color-light)";

    case "style2":
      return "inset 0 -0.07em 0 0 var(--background-color), inset 0 -0.14em 0 0 var(--color-light)";

    default:
      return "0 0.01em 0 0 var(--color-light), inset 0 -0.06em 0 0 var(--color-light)";
  }
}

// Setting the box shadow with theme caused font render issues
export const aLinkHoverFocus = css`
  color: var(--color-base);
  text-shadow:
    0.04em 0.04em var(--background-color),
    -0.04em 0.04em var(--background-color),
    -0.04em -0.04em var(--background-color),
    0.04em -0.04em var(--background-color),
    -0.04em 0 var(--background-color),
    0.04em 0 var(--background-color);
  box-shadow: ${({ theme }) => getBoxShadow(theme.fontStyle)};
`;

export const aLinkBase = `
  cursor: pointer;
  transition: ${transition.color}, box-shadow 0.17s ease-in,
    text-shadow 0.17s ease-in;


  &[aria-current] {
    font-weight: var(--font-weight-medium);
  }
`;

export const aLink = css`
  ${aLinkBase}

  &:hover {
    ${aLinkHoverFocus}
  }

  &:focus-visible {
    ${aLinkHoverFocus}
  }

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
