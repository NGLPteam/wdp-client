import styled from "styled-components";
import { aBaseInput, basePadding } from "theme/mixins/appearance";

export const TextareaInput = styled.textarea`
  --input-min-height: ${basePadding(40)};
  --input-padding: ${basePadding(3)} ${basePadding(4)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;
