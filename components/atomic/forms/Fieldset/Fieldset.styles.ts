import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: var(--fieldset-field-spacing, ${basePadding(4)});
`;

export const Legend = styled.legend``;

export const Fields = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--fieldset-field-spacing, ${basePadding(4)});

  > * {
    flex: 1 1 auto;
    align-self: flex-end;
  }

  > button {
    flex: 0;
  }
`;
