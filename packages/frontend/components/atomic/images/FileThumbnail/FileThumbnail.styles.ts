import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { borderRadius } from "theme/base/variables";
import { aFocusBase } from "theme/mixins";

export const Figure = styled.figure`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(120)};
  width: ${pxToRem(120)};
  border-radius: ${borderRadius.xs};
  overflow: hidden;

  > svg {
    z-index: 1;
    /* The size of the 32px icon is increased in Figma */
    width: 48px;
    height: 48px;
  }

  *:focus > & {
    ${aFocusBase}
  }
`;

export const ImageWrapper = styled.span`
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
`;
