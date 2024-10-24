import styled from "styled-components";

export const Wrapper = styled.div<WrapperProps>`
  flex-basis: var(--form-grid-item-width);

  ${({ $isWide }) => $isWide && `flex-basis: var(--form-grid-item-width-wide);`}

  &[aria-hidden="true"] {
    display: none;
  }
`;

interface WrapperProps {
  $isWide?: boolean;
}
