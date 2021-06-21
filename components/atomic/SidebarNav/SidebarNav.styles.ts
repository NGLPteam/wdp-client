import styled, { css } from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { tHeading } from "theme/mixins/typography";

export const Nav = styled.nav`
  padding-inline-end: ${basePadding(7)};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-top: ${basePadding(5)};
  }
`;

export const Link = styled.a<LinkProps>`
  display: block;
  border-bottom: 1px solid var(--neutral40);
  padding-bottom: 6px;
  color: var(--color-light);
  ${tHeading(3)}

  &:hover {
    color: inherit;
    border-color: var(--color);
  }

  &:focus-visible {
    outline: 0;
    border-color: var(--brand50);
    color: var(--brand50);
    ${aTextGlow("lightMode")}
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid var(--accent-color);
      color: var(--accent-color);
    `}
`;

interface LinkProps {
  active?: boolean;
}
