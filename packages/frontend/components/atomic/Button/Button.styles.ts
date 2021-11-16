import styled from "styled-components";

export const ButtonStyles = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: 8px;
  }
`;
