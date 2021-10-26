import styled, { css } from "styled-components";
import { respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Link = styled.a`
  display: flex;
  gap: var(--grid-column-gap-sm);
  align-items: center;
  margin-block-start: -${pxToRem(5)};
  margin-block-end: -${pxToRem(5)};

  ${respond(
    css`
      margin: 0;
    `,
    "tableBreak"
  )}
`;
