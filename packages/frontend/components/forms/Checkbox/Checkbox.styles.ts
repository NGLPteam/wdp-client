import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { IconFactory } from "components/factories";

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const LabelText = styled.span`
  cursor: pointer;

  input:disabled + & {
    cursor: default;
  }
`;

export const Icon = styled(IconFactory)`
  cursor: pointer;
  display: inline-block;
  margin-inline-end: ${pxToRem(8)};

  [data-path-name="check"] {
    color: transparent;
  }

  input:hover + & {
    color: var(--accent-light);
  }

  input:checked + & {
    color: var(--accent-light);

    [data-path-name="check"] {
      color: var(--current-color);
    }
  }

  input:disabled + & {
    color: var(--color-lighter);
    cursor: default;
  }

  input:focus + & {
    color: var(--accent-light);
  }
`;
