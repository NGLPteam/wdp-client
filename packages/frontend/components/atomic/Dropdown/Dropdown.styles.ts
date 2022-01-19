import styled from "styled-components";
import { borderRadius, boxShadow } from "theme/base/variables";
import { tCopySmall } from "theme/mixins/typography";

export const DropdownWrapper = styled.div`
  background-color: var(--dropdown-background);
  border-radius: ${borderRadius.sm};
  border: 1px solid var(--color-base-neutral30);
  box-shadow: ${boxShadow.popUp};
`;

export const List = styled.ul`
  padding-block-start: calc(var(--padding-md) - var(--padding-sm));
  padding-block-end: calc(var(--padding-lg) - var(--padding-sm));
`;

export const Item = styled.li`
  white-space: nowrap;
  ${tCopySmall}

  > * {
    display: block;
    padding-inline-start: var(--padding-lg);
    padding-inline-end: var(--padding-lg);
    padding-block-start: var(--padding-sm);
    padding-block-end: var(--padding-sm);
  }
`;
