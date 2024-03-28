import styled from "styled-components";

export const Label = styled.span`
  display: inline;

  span[data-active="true"] + & {
    display: none;
  }
`;
