import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Link = styled.a`
  display: flex;
  align-items: center;
  max-height: 40px;
  position: relative;

  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }

  > *:first-child {
    flex: 0 0 auto;
  }
`;

export const Name = styled.div`
  line-height: 1.25em;
`;
