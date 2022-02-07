import styled from "styled-components";
import { boxShadow } from "theme/base/variables";
import { tCopySmall } from "theme/mixins";

export const PageWrapper = styled.figure`
  margin-block-end: var(--container-padding-lg);

  &:last-of-type {
    margin-block-end: var(--padding-xl);
  }
`;

export const Page = styled.div`
  box-shadow: ${boxShadow.popUp};

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export const PageNumber = styled.caption`
  display: block;
  margin-block-start: var(--padding-sm);
  color: var(--color-lighter);
  text-align: center;
  ${tCopySmall}
`;
