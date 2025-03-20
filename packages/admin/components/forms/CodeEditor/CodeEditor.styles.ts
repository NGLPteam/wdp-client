import styled from "styled-components";
import { aBaseInput } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const TextareaInput = styled.div`
  --input-min-height: ${pxToRem(248)};
  --input-padding: ${pxToRem(12)} ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
  width: 100%;
`;
