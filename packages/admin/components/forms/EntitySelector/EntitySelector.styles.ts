import styled from "styled-components";
import { IconFactory } from "components/factories";
import { aGlow, aLink, aBgLight } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.button`
  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(16)};
  cursor: pointer;
  width: 100%;

  --button-control-opacity: 0;
  --button-control-visibility: 0;

  &:hover,
  &:focus,
  &:focus-within {
    ${aBgLight("brand10")}
    transition: var(--background-transition);

    --button-control-opacity: 1;
    --button-control-visibility: 1;
    --checkbox-opacity: 1;
    --checkbox-visibility: 1;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const LabelText = styled.span`
  ${aLink()}
  cursor: pointer;
  font-weight: var(--font-weight-medium);

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

export const Arrow = styled(IconFactory)`
  display: none;
  transform: rotate(90deg);
  ${aLink()}

  ${Wrapper}:hover & {
    display: block;
  }
`;
