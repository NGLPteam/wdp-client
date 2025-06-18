import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { respond } from "theme/mixins/base";
import BaseInputDescription from "../BaseInputDescription";

export const Fieldset = styled.fieldset`
  flex-basis: var(--form-grid-item-width-wide);
  --form-grid-row-gap: ${pxToRem(16)};
  --form-grid-column-gap: ${pxToRem(20)};
`;

export const Legend = styled.legend``;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--fieldset-field-spacing);
  border: 1px solid var(--neutral60);
  border-radius: var(--border-radius-sm);
  background-color: var(--fieldset-bg-color, var(--neutral05));
  padding-block-start: ${pxToRem(16)};
  padding-block-end: ${pxToRem(20)};
  padding-inline-start: ${pxToRem(20)};
  padding-inline-end: ${pxToRem(20)};
`;

export const Fields = styled.div`
  --table-border: 1px solid var(--border-color);

  display: flex;
  flex-direction: row;
  gap: var(--fieldset-field-spacing);
  align-items: start;

  ${respond(
    css`
      flex-direction: column;
      border-bottom: var(--table-border);
    `,
    50,
  )}
`;

export const Field = styled.div`
  flex: 1 1 auto;
  ${respond(
    css`
      width: 100%;
    `,
    50,
  )}
`;

export const Actions = styled.div`
  --fieldset-actions-column-spacing: ${pxToRem(24)};
  flex: 0;
  padding-block-start: ${pxToRem(25)};

  ${respond(
    css`
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-block-end: var(--fieldset-actions-column-spacing);
      padding-block-start: 0;
    `,
    50,
  )}
`;

export const Description = styled(BaseInputDescription)`
  padding-block-start: 0;
  padding-block-end: ${pxToRem(4)};
`;
