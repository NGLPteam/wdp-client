import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Nav = styled.nav`
  padding: 0 var(--container-column-margin);
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--container-max);
  padding: ${basePadding(5)} 0;
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: ${basePadding(7)};
  }
`;
