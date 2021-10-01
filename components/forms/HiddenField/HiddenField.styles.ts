import styled from "styled-components";

export const Wrapper = styled.div<WrapperProps>`
  flex-basis: var(--form-grid-flex-basis);

  ${({ isWide }) => isWide && `flex-basis: var(--form-grid-flex-basis-wide);`}

  &[aria-hidden="true"] {
    display: none;
  }
`;

interface WrapperProps {
  isWide?: boolean;
}
