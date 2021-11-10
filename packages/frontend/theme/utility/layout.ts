// Utility layout classes
// --------------------
import { css } from "styled-components";
import { containerWidths } from "../base/variables";

export default css`
  .l-container-max {
    max-width: calc(${containerWidths.max} + (var(--grid-column-gap) * 2));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: var(--grid-column-gap);
    padding-inline-end: var(--grid-column-gap);
  }

  .l-container-wide {
    max-width: calc(${containerWidths.wide} + (var(--grid-column-gap) * 2));
    margin-inline-start: auto;
    margin-inline-end: auto;
    padding-inline-start: var(--grid-column-gap);
    padding-inline-end: var(--grid-column-gap);
  }
`;
