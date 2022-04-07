import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Wrapper = styled.div`
  position: relative;
  padding-block-start: ${pxToRem(36)};
  padding-block-end: ${pxToRem(36)};
  padding-inline-start: ${pxToRem(48)};
  padding-inline-end: ${pxToRem(48)};
  max-width: ${pxToRem(464)};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${pxToRem(14)};
  right: ${pxToRem(14)};
`;
