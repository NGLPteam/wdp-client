import { css } from "styled-components";

type GridProps = {
  rowGap?: string;
  colGap?: string;
  columns?: number;
};

// Base grid styling
export function lGridBase(props?: GridProps) {
  return `
    display: grid;
    grid-template-columns: repeat(${(props && props.columns) || 12}, 1fr);
    row-gap: ${(props && props.rowGap) || "var(--grid-row-gap)"};
    column-gap: ${(props && props.colGap) || "var(--grid-column-gap)"};
  `;
}

// Base grid styling with columns
export function lGrid(props?: GridProps) {
  return css`
    ${lGridBase(props)}
  `;
}
