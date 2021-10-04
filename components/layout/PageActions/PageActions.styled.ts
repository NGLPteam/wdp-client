import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { noFlexGapSupport } from "theme/mixins/base";

export const Wrapper = styled.div`
  padding-block-end: ${pxToRem(16)};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${pxToRem(12)};
  align-items: center;
  justify-content: flex-end;

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(12)};
    }
  `)}
`;
