import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Header = styled.header`
  padding-block-start: ${pxToRem(14)};
  padding-block-end: ${pxToRem(14)};
  min-height: ${pxToRem(60)};
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  > * + * {
    margin-inline-start: ${pxToRem(28)};
  }
`;
