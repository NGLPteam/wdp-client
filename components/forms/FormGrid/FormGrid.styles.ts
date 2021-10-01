import styled from "styled-components";
import { respond } from "theme/mixins/base";

export const Grid = styled.div`
  --form-grid-flex-basis: var(
    --drawer-form-grid-flex-basis,
    calc(50% - (var(--form-column-gap) * 0.5))
  );
  --form-grid-flex-basis-wide: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: var(--form-row-gap);
  column-gap: var(--form-column-gap);
  padding-block-end: var(--form-group-padding-bottom);
  justify-content: space-between;

  ${respond(
    `
    --form-grid-flex-basis: 100%;
    flex-direction: column;
    `,
    50
  )}
`;
