import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { transition } from "theme/base/variables";
import { aFocusReset } from "theme/mixins";
// size="sm" secondary icon="chevronDown"

export const Link = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }

  > span {
    border-bottom: 2px solid transparent;
    padding-block-start: ${pxToRem(2)};
    padding-block-end: ${pxToRem(2)};
    transition: ${transition.border};
  }

  &:hover,
  &[aria-expanded="true"] {
    color: var(--color-light);

    > span {
      border-bottom-color: var(--color-lighter);
    }
  }

  ${aFocusReset}

  &:focus-visible,
  &[aria-current] {
    color: var(--color-base);

    > span {
      border-bottom-color: var(--color-base);
    }
  }
`;
