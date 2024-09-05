import styled, { css } from "styled-components";
import { pulse } from "theme/base/animations";

const LoadingSkeleton = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: var(--loading-border-radius);
  background: var(--brand10);
  ${({ $noShimmer }) =>
    !$noShimmer &&
    css`
      animation: ${pulse} 2s infinite cubic-bezier(0.83, 0, 0.17, 1);
    `};
`;

interface Props {
  $noShimmer?: boolean;
}

export default LoadingSkeleton;
