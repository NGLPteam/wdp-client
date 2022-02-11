import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Wrapper = styled.div<{
  $size?: number;
}>`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-sm);

  ${({ $size }) => `
    height: ${pxToRem($size || 160)};
    width: ${pxToRem($size || 160)};
  `}
`;
