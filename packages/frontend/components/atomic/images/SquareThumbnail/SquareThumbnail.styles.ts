import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { borderRadius } from "theme/base/variables";

export const Figure = styled.figure`
  position: relative;
  height: ${pxToRem(160)};
  width: ${pxToRem(160)};
  border-radius: ${borderRadius.xs};
  overflow: hidden;
`;
