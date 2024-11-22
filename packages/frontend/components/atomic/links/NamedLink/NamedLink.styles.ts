import styled from "styled-components";
import BaseLink from "next/link";
import { aLinkHoverFocus } from "theme/mixins";

export const Link = styled(BaseLink)`
  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;

    > span {
      ${aLinkHoverFocus}
    }
  }

  &[aria-current] {
    pointer-events: none;
  }
`;
