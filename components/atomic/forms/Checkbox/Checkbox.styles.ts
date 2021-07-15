import { IconFactory } from "components/factories";
import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

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

export const Checkbox = styled.input``;

export const Icon = styled(IconFactory)`
  cursor: pointer;
  display: inline-block;
  margin-inline-end: ${basePadding(2)};

  [data-path-name="check"] {
    color: transparent;
  }

  input:hover + & {
    color: var(--accent-light);
  }

  input:checked + & {
    color: var(--accent-light);

    [data-path-name="box"] {
      fill: currentColor;
    }

    [data-path-name="check"] {
      color: var(--background-color);
    }
  }

  input:indeterminate + & {
    color: var(--accent-light);

    [data-path-name="box"] {
      fill: currentColor;
    }

    [data-path-name="indeterminate"] {
      stroke: var(--background-color);
    }
  }

  input:disabled + & {
    color: var(--color-lighter);
    cursor: default;
  }
`;
