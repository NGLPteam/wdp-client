import styled from "styled-components";
import { aLink } from "theme/mixins/appearance";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  width: 100%;
  padding-block-start: ${pxToRem(120)};
  padding-inline-start: var(--container-column-margin);
  padding-inline-end: var(--container-column-margin);
  padding-block-end: ${pxToRem(48)};
  font-size: var(--font-size-sm);
  color: var(--color-light);
  --link-transition: var(--color-transition);
`;

export const Nav = styled.nav`
  margin: 0 auto;
  max-width: var(--container-max);
  padding-block-start: ${pxToRem(40)};
  padding-block-end: ${pxToRem(68)};
  border-top: 1px solid var(--border-color);

  &.l-grid {
    row-gap: ${pxToRem(40)};
  }
`;

export const Header = styled.h3`
  ${tLabel("sm")}
  padding-block-end: ${pxToRem(14)};
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  & + & {
    padding-block-start: ${pxToRem(16)};
  }

  a {
    ${aLink("color-light")}
  }
`;

export const Copyright = styled.div`
  margin: 0 auto;
  max-width: var(--container-max);
`;

export const PoweredBy = styled.span`
  color: var(--accent-color);
`;
