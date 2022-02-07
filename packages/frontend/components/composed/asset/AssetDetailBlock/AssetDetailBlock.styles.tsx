import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Section = styled.section`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-xxl);

  > * + * {
    margin-block-start: var(--padding-xl);
  }
`;

export const ContentBlock = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const AssetInfo = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(4)};
  }
`;
