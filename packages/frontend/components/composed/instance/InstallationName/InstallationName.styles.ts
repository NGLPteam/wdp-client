import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Wrapper = styled.div`
  align-items: center;
`;

export const Name = styled.p`
  margin-block-end: ${pxToRem(2)};
`;
