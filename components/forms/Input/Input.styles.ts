import styled from "styled-components";
import { aBaseInput, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Input = styled.input`
  --input-min-height: ${pxToRem("42px")};
  --input-padding: 0 ${basePadding(4)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;
