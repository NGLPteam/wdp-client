import styled from "styled-components";
import { respond } from "theme/mixins";

export const Item = styled.li`
  grid-column: span 3;

  ${respond(`grid-column: span 4;`, 100)}
  ${respond(`grid-column: span 6;`, 70)}
  ${respond(`grid-column: span 1;`, 50)}

  &:empty {
    display: none;
  }
`;

export const Label = styled.strong`
  display: block;
  padding-block-end: var(--padding-xs);
`;

export const Text = styled.span`
  color: var(--color-light);
`;
