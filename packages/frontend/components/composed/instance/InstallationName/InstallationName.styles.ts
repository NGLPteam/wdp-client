import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Wrapper = styled.div`
  align-items: center;
`;

export const Name = styled.p`
  padding-block-end: ${pxToRem(2)};
`;
