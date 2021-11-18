import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Header = styled.header`
  padding-block: ${pxToRem(14)};
  min-height: ${pxToRem(60)};
`;

export const HeaderInner = styled.div`
  display: grid;
  grid-template:
    "left . right" auto
    / auto 1fr auto;
`;

export const LeftSide = styled.div`
  grid-area: left;
`;

export const RightSide = styled.div`
  grid-area: right;
`;
