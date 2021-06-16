import styled, { css } from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { aTextGlow } from "theme/mixins/appearance";

const TopNavItem = styled.a<Props>`
  border-bottom: 2px solid transparent;
  padding-bottom: 1px;
  transition: var(--border-transition), var(--color-transition);
  ${tLabel("md")}

  &:hover {
    color: var(--brand30);
    border-color: var(--brand30);
  }

  &:focus-visible {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active {
    color: var(--neutral00);
    border-color: var(--neutral00);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--neutral00);
      border-color: var(--neutral00);
    `}
`;

interface Props {
  active?: boolean;
}

export default TopNavItem;
