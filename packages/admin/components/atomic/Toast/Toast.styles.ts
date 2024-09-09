import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import {
  fadeIn,
  fadeOut,
  fadeInScale,
  fadeOutScale,
} from "theme/base/animations";

const EASE_FUNCTION = "cubic-bezier(0.83, 0, 0.17, 1)";
const TIMING = "350ms";

export const BaseToast = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(6)};
  background: var(--brand90);
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: ${pxToRem(24)};
  padding-block-start: ${pxToRem(16)};
  padding-block-end: ${pxToRem(16)};
  font-weight: var(--font-weight-medium);
  color: var(--neutral00);
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);

  &[data-visible="true"] {
    animation: ${fadeInScale} ${TIMING} ${EASE_FUNCTION} forwards;

    @media (prefers-reduced-motion: reduce) {
      animation: ${fadeIn} ${TIMING} ${EASE_FUNCTION} forwards;
    }
  }

  &[data-visible="false"] {
    animation: ${fadeOutScale} ${TIMING} ${EASE_FUNCTION} forwards;

    @media (prefers-reduced-motion: reduce) {
      animation: ${fadeOut} ${TIMING} ${EASE_FUNCTION} forwards;
    }
  }

  &[data-type="success"] {
    background-color: var(--greendark);
  }

  &[data-type="error"] {
    background-color: var(--reddark);
  }

  > * + * {
    padding-inline-start: ${pxToRem(12)};
  }
`;

export const Text = styled.span`
  &:first-letter {
    text-transform: uppercase;
  }
`;
