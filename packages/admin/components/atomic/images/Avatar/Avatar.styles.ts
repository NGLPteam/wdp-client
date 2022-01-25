import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div<{ size?: number }>`
  border: 1px solid var(--accent-lighter);
  border-radius: 50%;
  background: var(--accent-color);
  overflow: hidden;

  ${({ size }) =>
    size &&
    `
      width: ${pxToRem(size)};
      height: ${pxToRem(size)};
    `}
`;
