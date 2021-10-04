import styled from "styled-components";
import { aBaseInput } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Input = styled.input`
  --input-min-height: ${pxToRem(42)};
  --input-padding: 0 ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;
