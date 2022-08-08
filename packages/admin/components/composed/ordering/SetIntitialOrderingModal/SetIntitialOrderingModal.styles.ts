import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const ModalContent = styled.div`
  footer {
    padding-block-start: ${pxToRem(44)};
    padding-block-end: 0;
    border-top: 0;

    > button {
      flex: 1 1 auto;
    }
  }
`;

export const SelectDescription = styled.p`
  padding-block-end: ${pxToRem(16)};
`;
