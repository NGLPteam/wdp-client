import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { aTextGlow } from "theme/mixins/appearance";

const TopNavItem = styled.a`
  color: var(--brand20);
  border-bottom: 2px solid transparent;
  padding-bottom: 1px;
  ${tLabel("md")}

  &:hover {
    color: var(--brand30);
    border-color: var(--brand30);
  }

  &:focus {
    outline: 0;
    ${aTextGlow("darkMode")}
  }

  &:active {
    color: var(--neutral00);
    border-color: var(--neutral00);
  }
`;

export default TopNavItem;
