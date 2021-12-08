import styled from "styled-components";

export const ButtonStyles = styled.button`
  > * + * {
    margin-inline-start: 8px;
  }

  svg {
    flex: 1 0 auto;
  }
`;
