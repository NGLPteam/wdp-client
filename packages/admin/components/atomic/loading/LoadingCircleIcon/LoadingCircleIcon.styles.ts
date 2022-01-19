import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { spin } from "theme/base/animations";

const CIRCLE_SIZE = pxToRem(80);

export const Circle = styled.div`
  height: ${CIRCLE_SIZE};
  width: ${CIRCLE_SIZE};
  border-radius: 50%;
  border: 4px solid;
  border-top-color: var(--brand30);
  border-bottom-color: var(--brand70);
  border-left-color: var(--brand70);
  border-right-color: var(--brand70);
  animation: ${spin} 3s infinite linear;
`;
