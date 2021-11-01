import { IconFactory } from "components/factories";
import styled from "styled-components";
import { aGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

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

  [data-path-name="box"] {
    fill: var(--neutral00);
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

  input:focus + & {
    ${aGlow("lightMode")}
    color: var(--accent-light);
  }
`;
