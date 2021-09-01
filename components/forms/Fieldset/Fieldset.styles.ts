import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: var(--fieldset-field-spacing, ${basePadding(4)});
`;

export const Legend = styled.legend`
  padding-block-end: var(--fieldset-field-spacing, ${basePadding(4)});
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--fieldset-field-spacing, ${basePadding(4)});
  align-items: start;
`;

export const Field = styled.div`
  flex: 1 1 auto;
`;

export const Actions = styled.div`
  flex: 0;
  padding-block-start: ${pxToRem(30)};
`;
