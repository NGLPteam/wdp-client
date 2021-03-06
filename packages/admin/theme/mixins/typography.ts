import { css } from "styled-components";
import { pxToRem } from "./functions";
export { tTruncate, tLineClamp } from "@wdp/lib/theme/mixins";

export function tLabel(size: "sm" | "md" | "lg") {
  return css`
    text-transform: uppercase;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 1px;
    font-size: var(--font-size-label-${size});
    line-height: var(--line-height-label-${size});
  `;
}

// Base list styling
export const tList = css`
  padding: 0;
  margin-inline-start: ${pxToRem(8)};
`;

// Remove list styling
export const tListUnstyled = css`
  padding: 0;
  margin-inline-start: 0;
  list-style-type: none;
`;

// Base heading styling
export function tHeading(size: 1 | 2 | 3 | 4 | 5 | 6) {
  return css`
    font-size: var(${`--font-size-h${size}`});
    font-weight: var(${`--font-weight-h${size}`});
    line-height: var(${`--line-height-h${size}`});
  `;
}
