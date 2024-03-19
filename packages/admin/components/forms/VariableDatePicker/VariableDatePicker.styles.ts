import styled from "styled-components";
import { respond } from "theme/mixins/base";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--form-grid-row-gap) var(--form-grid-column-gap);

  ${respond(
    `
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    `,
    50,
  )}
`;
