import styled from "styled-components";

export const List = styled.ul``;

export const ListItem = styled.li`
  & + & {
    padding-block-start: var(--padding-xl);
  }
`;
