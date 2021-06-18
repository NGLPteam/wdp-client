import { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export function tLabel(size: "sm" | "md" | "lg") {
  return css`
    text-transform: uppercase;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 1px;
    font-size: var(--font-size-label-${size});
    line-height: var(--line-height-label-${size});
  `;
}

// Base link styling, with color override
export const tLink = (color?: string) => css`
  color: var(--${color || "accent-color"}, inherit);
  transition: var(--color-transition);

  &:hover {
    color: var(--accent-color);
    text-decoration: underline;
  }
`;

export const tList = css`
  padding: 0;
  margin-left: ${basePadding(2)};
`;

export const tListUnstyled = css`
  padding: 0;
  margin-left: 0;
  list-style-type: none;
`;
