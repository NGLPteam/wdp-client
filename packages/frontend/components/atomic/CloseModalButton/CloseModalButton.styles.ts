import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";
import { transition } from "theme/base/variables";

export const Toggle = styled.button`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  display: block;
  margin-inline-end: ${pxToRem(12)};
  border-bottom: 2px solid transparent;
  transition: ${transition.border};

  ${/* sc-selector */ Toggle}:hover &,
  ${/* sc-selector */ Toggle}[data-focus-visible-added] & {
    border-bottom-color: var(--color-lighter);
  }

  ${respond(aHidden, 30)}
`;
