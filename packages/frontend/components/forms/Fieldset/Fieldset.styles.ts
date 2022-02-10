import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLabel } from "theme/mixins";

export const Legend = styled.legend`
  min-height: ${pxToRem(30)};
  margin-bottom: ${pxToRem(20)};
  padding-top: ${pxToRem(4)};
  border-bottom: 1px solid var(--border-color);
  ${tLabel("sm")}
`;

export const Fields = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(20)};
  }
`;
