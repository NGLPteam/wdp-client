import styled, { css } from "styled-components";
import { aTextGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tHeading } from "theme/mixins/typography";

export const Nav = styled.nav`
  padding-block: ${pxToRem(4)};
  padding-inline-end: ${pxToRem(28)};
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-block-start: ${pxToRem(20)};
  }
`;

export const Link = styled.a<LinkProps>`
  display: block;
  box-shadow: inset 0 -1px 0 var(--neutral40);
  padding-block-end: 6px;
  color: var(--color-light);
  transition: box-shadow var(--base-duration) var(--base-timing),
    var(--color-transition);
  text-transform: capitalize;
  ${tHeading(3)}

  &:hover {
    ${({ active }) =>
      !active &&
      css`
        color: inherit;
        box-shadow: inset 0 -1px 0 var(--color-base);
      `}
  }

  &:focus-visible {
    outline: 0;
    box-shadow: inset 0 -1px 0 var(--brand50);
    color: var(--brand50);
    ${aTextGlow("lightMode")}
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: inset 0 -2px 0 var(--accent-color);
      color: var(--accent-color);
    `}
`;

interface LinkProps {
  active?: boolean;
}
