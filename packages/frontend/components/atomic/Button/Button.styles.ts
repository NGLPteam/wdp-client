import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;

  > * + * {
    margin-inline-start: 8px;
  }

  svg {
    flex: 1 0 auto;
  }
`;
