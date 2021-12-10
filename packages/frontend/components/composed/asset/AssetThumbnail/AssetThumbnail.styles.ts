import styled from "styled-components";
import { transition } from "theme/base/variables";
import { aFocusBase, aFocusReset } from "theme/mixins";

export const ImageLink = styled.a`
  display: inline-block;
  flex: none;
  height: auto;
  ${aFocusReset}

  &:focus > * {
    ${aFocusBase}
  }

  &:hover > * {
    background: var(--button-secondary-bg-hover-color);
    color: var(--button-secondary-text-hover-color);
    transition: ${transition.color}, ${transition.background},
      ${transition.opacity};
  }
`;
