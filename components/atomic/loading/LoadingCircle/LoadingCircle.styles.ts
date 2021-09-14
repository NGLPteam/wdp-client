import styled, { keyframes } from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Skeleton = styled.div`
  height: 100%;
  background: var(--brand10);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
export const Circle = styled.div`
  height: ${pxToRem("80px")};
  width: ${pxToRem("80px")};
  border-radius: 50%;
  border: 4px solid;
  border-top-color: var(--brand30);
  border-bottom-color: var(--brand70);
  border-left-color: var(--brand70);
  border-right-color: var(--brand70);
  animation: ${spin} 3s infinite linear;
`;
