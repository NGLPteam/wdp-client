import styled from "styled-components";
import { tLabel } from "theme/mixins";

export const List = styled.ul`
  margin-block-end: var(--container-padding-lg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  overflow-x: auto;
`;

export const Item = styled.li`
  & + & {
    margin-inline-start: var(--padding-lg);
  }
`;

export const TabLink = styled.a`
  display: inline-block;
  padding-block-end: var(--padding-sm);
  border-bottom: 2px solid transparent;
  color: var(--color-light);
  ${tLabel("sm")}

  &[aria-current] {
    border-bottom-color: var(--color-base-neutral90);
    color: var(--color-base);
  }
`;
