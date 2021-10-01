import styled from "styled-components";
import { respond } from "theme/mixins/base";

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
`;
