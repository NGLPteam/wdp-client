import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Nav = styled.div`
  padding-block: ${pxToRem(36)};
  min-height: ${pxToRem(104)};
`;

export const NavInner = styled.div`
  --button-secondary-bg-color: var(--color-custom10);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.div``;

export const RightSide = styled.div`
  max-width: ${pxToRem(376)};
`;
