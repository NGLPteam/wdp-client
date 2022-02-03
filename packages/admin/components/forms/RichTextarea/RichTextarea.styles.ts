import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aBaseInput } from "theme/mixins/appearance";

export const Editor = styled.div`
  --input-min-height: ${pxToRem(248)};
  --input-padding: ${pxToRem(12)} ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  ${aBaseInput()}
`;

export const Toolbar = styled.div`
  display: flex;
  margin-block-end: ${pxToRem(16)};

  > * + * {
    margin-inline-start: ${pxToRem(8)};
  }
`;
