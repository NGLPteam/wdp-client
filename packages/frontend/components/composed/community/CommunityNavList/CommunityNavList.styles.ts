import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const NavList = styled.ul<{ $condensed?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > * + * {
    margin-inline-start: ${({ $condensed }) =>
      $condensed ? pxToRem(28) : pxToRem(36)};
  }
`;

export const MobileNavList = styled.ul<{ $condensed?: boolean }>`
  > * + * {
    margin-block-start: ${pxToRem(35)};
  }
`;
