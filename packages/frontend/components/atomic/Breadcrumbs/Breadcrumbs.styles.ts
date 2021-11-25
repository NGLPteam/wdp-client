import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Delimiter = styled.span`
  display: inline-block;
  padding-inline-start: ${pxToRem(10)};
  padding-inline-end: ${pxToRem(10)};
`;
