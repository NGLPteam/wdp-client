import { css } from "styled-components";

export function tLabel(size: "sm" | "md" | "lg") {
  return css`
    text-transform: uppercase;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 1px;
    font-size: var(--font-size-label-${size});
    line-height: var(--line-height-label-${size});
  `;
}
