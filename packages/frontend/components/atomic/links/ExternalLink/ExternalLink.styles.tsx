import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Link = styled.a`
  > * + * {
    margin-inline-start: var(--padding-xxs);
  }

  > svg {
    margin-block-end: -${pxToRem(3)};
  }
`;
