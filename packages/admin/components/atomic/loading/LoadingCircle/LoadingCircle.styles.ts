import styled, { keyframes } from "styled-components";
import LoadingSkeleton from "../LoadingSkeleton";
import { pxToRem } from "theme/mixins/functions";
const CIRCLE_SIZE = pxToRem(80);

const spin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

export const Skeleton = styled(LoadingSkeleton)`
  padding-block-start: ${CIRCLE_SIZE};
  padding-block-end: ${CIRCLE_SIZE};
`;

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
