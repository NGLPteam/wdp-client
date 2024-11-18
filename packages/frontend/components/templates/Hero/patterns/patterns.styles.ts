import styled, { css } from "styled-components";
import { fluidScale, respond } from "theme/mixins";
import { containerWidths } from "theme/base/variables";

export const Grid = styled.div`
  display: grid;
  position: relative;
  max-inline-size: ${containerWidths.max};
  margin-inline-start: auto;
  margin-inline-end: auto;
  grid-template-columns: 1fr 1fr;
  min-block-size: ${fluidScale("490px", "200px")};

  ${respond(
    css`
      grid-template-columns: 60% 40%;
      min-block-size: auto;
    `,
    80,
  )}
  ${respond(
    css`
      grid-template-columns: auto;
    `,
    60,
  )};
`;
