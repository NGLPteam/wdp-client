import styled from "styled-components";
import {
  aBaseInput,
  aBaseInputLabel,
  basePadding,
} from "theme/mixins/appearance";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${aBaseInputLabel};
`;

export const TextareaInput = styled.textarea`
  --input-min-height: ${basePadding(30)};
  --input-padding: ${basePadding(3)} ${basePadding(4)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;
