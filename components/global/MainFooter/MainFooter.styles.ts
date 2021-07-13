import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { tLabel, tLink } from "theme/mixins/typography";

export const Wrapper = styled.div`
  width: 100%;
  padding: ${basePadding(30)} var(--container-column-margin) ${basePadding(12)};
  font-size: var(--font-size-sm);
  color: var(--color-light);
  --link-transition: var(--color-transition);
`;

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: var(--container-max);
  border-top: 1px solid var(--neutral40);
  padding-block: ${basePadding(10)};
  padding-block-end: ${basePadding(17)};

  &.l-grid {
    row-gap: ${basePadding(10)};
  }
`;

export const Header = styled.h3`
  ${tLabel("sm")}
  padding-block-end: ${basePadding(3.5)};
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  & + & {
    padding-block-start: ${basePadding(4)};
  }

  a {
    ${tLink("color-light")}
  }
`;

export const Copyright = styled.div`
  margin: 0 auto;
  max-width: var(--container-max);
`;
