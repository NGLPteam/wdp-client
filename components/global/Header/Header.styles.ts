import styled, { css } from "styled-components";
import { basePadding, aTextGlow } from "theme/mixins/appearance";
import { tLabel } from "theme/mixins/typography";

export const ProviderBar = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: ${basePadding(4)} var(--container-column-margin);
  text-align: center;
`;

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

export const Link = styled.a<LinkProps>`
  display: inline-block;
  border-bottom: 2px solid transparent;
  padding-block-end: 1px;
  transition: var(--border-transition), var(--color-transition);
  color: var(--accent-light);
  ${tLabel("md")}

  &:hover {
    color: var(--accent-lighter);
    border-color: var(--accent-lighter);
  }

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active,
  &[aria-expanded="true"] {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--accent-color);
      border-color: var(--accent-color);
    `}
`;

interface LinkProps {
  active?: boolean;
}
