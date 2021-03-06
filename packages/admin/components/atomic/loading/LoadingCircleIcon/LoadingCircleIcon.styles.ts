import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { spin } from "theme/base/animations";

const CIRCLE_SIZE = pxToRem(80);

export const Circle = styled.div`
  height: 50%;
  max-height: ${CIRCLE_SIZE};
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 4px solid;
  border-top-color: var(--brand30);
  border-bottom-color: var(--brand70);
  border-left-color: var(--brand70);
  border-right-color: var(--brand70);
  animation: ${spin} 1s infinite cubic-bezier(0.37, 0, 0.63, 1);
`;
