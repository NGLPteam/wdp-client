import styled from "styled-components";

export const ItemPrimaryMetadata = styled.ul`
  display: flex;
  flex-wrap: wrap;

  > * + * {
    &:before {
      content: ", ";
    }
  }
`;
