import styled from "styled-components";
import { aGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import BaseInputDescription from "components/forms/BaseInputDescription";

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Description = styled(BaseInputDescription)`
  padding-block-start: 0;
  padding-block-end: ${pxToRem(16)};
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-block-end: ${pxToRem(16)};
`;

export const LabelText = styled.span`
  cursor: pointer;

  input:disabled + & {
    cursor: default;
  }
`;

export const Radio = styled.input`
  cursor: pointer;
  display: grid;
  place-content: center;
  margin: 0;
  margin-inline-end: ${pxToRem(8)};
  appearance: none;
  background-color: var(--neutral00);
  color: var(--accent-light);
  width: ${pxToRem(16)};
  height: ${pxToRem(16)};
  border: 1px solid currentColor;
  border-radius: 50%;
  transition: 100ms border ease;

  &:checked {
    border: 4px solid currentColor;
  }

  &:hover {
    color: var(--accent-light);
  }

  &:disabled {
    color: var(--color-lighter);
    cursor: default;
  }

  &:focus {
    ${aGlow("lightMode")}
    color: var(--accent-light);
  }
`;
