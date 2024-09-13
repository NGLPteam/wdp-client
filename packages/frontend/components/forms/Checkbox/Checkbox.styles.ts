import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { IconFactory } from "components/factories";
import { boxShadow } from "theme/base/variables";

export const Label = styled.label`
  display: flex;
  align-items: start;
`;

export const LabelText = styled.span`
  cursor: pointer;

  input:disabled + & {
    cursor: default;
  }
`;

export const Icon = styled(IconFactory)`
  --checkbox-fill: var(--color-base-neutral00);
  cursor: pointer;
  display: inline-block;
  margin-inline-end: ${pxToRem(8)};
  margin-block-start: 0.1875rem;

  [data-path-name="check"] {
    color: transparent;
  }

  input:hover + & {
    color: var(--color-light);
    --checkbox-fill: var(--color-custom10);
  }

  input:checked + & {
    [data-path-name="check"] {
      color: var(--current-color);
    }
  }

  input:disabled + & {
    color: var(--color-lighter);
    cursor: default;
  }

  input[data-focus-visible-added] + & {
    box-shadow: ${boxShadow.focusGlow};
  }
`;
