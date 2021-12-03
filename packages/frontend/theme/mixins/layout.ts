import { css } from "styled-components";

// Base grid styling
export function lGridBase() {
  return css`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    row-gap: var(--grid-row-gap);
    column-gap: var(--grid-column-gap);
  `;
}

// Base grid styling with columns
export function lGrid() {
  return css`
    ${lGridBase()}
    grid-template-columns: repeat(12, 1fr);
  `;
}
