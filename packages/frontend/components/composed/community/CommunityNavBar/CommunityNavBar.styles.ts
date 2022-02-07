import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { globalNavRespond } from "theme/mixins";

export const Nav = styled.nav`
  padding-block-start: ${pxToRem(36)};
  padding-block-end: ${pxToRem(36)};
  min-height: ${pxToRem(60)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${globalNavRespond(
    `
    display: none;
    `
  )}

  @media print {
    display: none;
  }
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(36)};
  }
`;
