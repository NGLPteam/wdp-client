import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Nav = styled.nav``;

export const List = styled.ul`
  box-shadow: inset 0 -1px 0 var(--neutral40);
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: ${basePadding(8)};
  }
`;
