import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { noFlexGapSupport } from "@wdp/lib/theme/mixins";

export const Banner = styled.div`
  padding-block: ${pxToRem(36)};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(20)};
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled.div`
  gap: ${pxToRem(12)};

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(12)};
    }
  `)}
`;
