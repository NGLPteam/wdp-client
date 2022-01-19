import styled from "styled-components";
import { respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: var(--form-grid-row-gap);
  column-gap: var(--form-grid-column-gap);
  padding-block-end: var(--form-grid-padding-bottom);
  justify-content: space-between;

  ${respond(
    `
    --form-grid-item-width: 100%;
    flex-direction: column;
    `,
    50
  )}

  fieldset & {
    padding-block-end: 0;
  }

  > fieldset + div {
    border-top: 1px solid var(--neutral40);
    padding-block-start: ${pxToRem(40)};
    margin-block-start: calc(${pxToRem(40)} - var(--form-grid-row-gap));

    ${respond(
      `
        padding-block-start: ${pxToRem(48)};
        margin-block-start: calc(${pxToRem(48)} - var(--form-grid-row-gap));

      `,
      50
    )}
  }
`;
