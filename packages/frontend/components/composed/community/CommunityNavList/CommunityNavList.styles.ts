import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import CommunityNavList from "./CommunityNavList";
type BaseProps = React.ComponentProps<typeof CommunityNavList>;

export const NavList = styled.ul<Pick<BaseProps, "condensed">>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > * + * {
    margin-inline-start: ${({ condensed }) =>
      condensed ? pxToRem(28) : pxToRem(36)};
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }
`;
