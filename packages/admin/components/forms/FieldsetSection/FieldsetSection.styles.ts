import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tHeading } from "theme/mixins/typography";
import BaseInputDescription from "../BaseInputDescription";

export const Fieldset = styled.fieldset`
  flex-basis: var(--form-grid-item-width-wide);
  padding-block-end: var(--fieldset-field-spacing);
`;

export const Legend = styled.legend`
  ${tHeading(3)}
  color: var(--accent-color);
  border-bottom: 1px solid var(--border-color);
  padding-block-start: 20px;
  padding-block-end: ${pxToRem(5)};
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-block-start: calc(var(--fieldset-field-spacing) * 2);
`;

export const Description = styled(BaseInputDescription)`
  padding-block-start: 0;
`;
