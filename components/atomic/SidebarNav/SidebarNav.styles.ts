import styled, { css } from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { tHeading } from "theme/mixins/typography";

export const Nav = styled.nav``;

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-top: ${basePadding(5)};
  }
`;

export const Link = styled.a<LinkProps>`
  border-bottom: 1px solid var(--neutral40);
  color: var(--color-light);
  padding-bottom: 6px;
  ${tHeading(3)}

  &:hover {
    color: inherit;
    border-color: var(--color);
  }

  &:focus-visible {
    color: var(--brand50);
    border-color: var(--brand50);
    outline: 0;
    ${aTextGlow("lightMode")}
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--accent-color);
      border-bottom: 2px solid var(--accent-color);
    `}
`;

interface LinkProps {
  active?: boolean;
}
