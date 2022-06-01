import styled from "styled-components";
import { boxShadow } from "theme/base/variables";
import { tCopySmall } from "theme/mixins";

export const Page = styled.div`
  box-shadow: ${boxShadow.popUp};
  background-color: var(--neutral10);
  border: 1px solid var(--neutral10);

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export const PageNumber = styled.div`
  display: block;
  margin-block-start: var(--padding-sm);
  color: var(--color-lighter);
  text-align: center;
  ${tCopySmall}
`;
