import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Nav = styled.nav``;

export const List = styled.ul`
  box-shadow: inset 0 -1px 0 var(--border-color);
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: ${pxToRem(32)};
  }
`;
