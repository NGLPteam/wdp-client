import styled, { keyframes } from "styled-components";
import { pxToRem } from "theme/mixins/functions";

const spin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

const Circle = styled.div<{ size?: number }>`
  height: ${({ size = 16 }) => pxToRem(size)};
  width: ${({ size = 16 }) => pxToRem(size)};
  border-radius: 50%;
  border: 1px solid;
  border-top-color: var(--brand30);
  border-bottom-color: var(--brand70);
  border-left-color: var(--brand70);
  border-right-color: var(--brand70);
  animation: ${spin} 3s infinite linear;
`;

export default Circle;
