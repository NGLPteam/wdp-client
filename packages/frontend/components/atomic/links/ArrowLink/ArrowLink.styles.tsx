import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;

  > * + * {
    margin-inline-start: var(--padding-xs);
  }

  > svg {
    margin-block-end: -${pxToRem(3)};
  }
`;
