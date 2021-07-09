import styled, { css } from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { aTextGlow } from "theme/mixins/appearance";

const MainNavItem = styled.a<Props>`
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

interface Props {
  active?: boolean;
}

export default MainNavItem;
