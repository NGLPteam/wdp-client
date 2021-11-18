import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Nav = styled.nav`
  padding-block: ${pxToRem(36)};
  min-height: ${pxToRem(60)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(36)};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(28)};
    display: flex;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }
`;
