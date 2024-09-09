import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import BaseInputDescription from "components/forms/BaseInputDescription";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > label + label {
    margin-block-start: ${pxToRem(16)};
  }
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

export const Fields = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(16)};
  }
`;
