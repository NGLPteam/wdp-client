import { css } from "styled-components";

// Base heading styling
export function lGrid() {
  return css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
  `;
}
