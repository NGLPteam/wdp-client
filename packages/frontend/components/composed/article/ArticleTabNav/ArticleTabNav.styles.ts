import styled from "styled-components";
import { boxShadow, transition } from "theme/base/variables";
import { aFocusReset, tLabel } from "theme/mixins";

export const List = styled.ul`
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
  transition: ${transition.border};
  ${tLabel("sm")}

  ${aFocusReset}

  &[aria-current],
  &[data-focus-visible-added] {
    border-bottom-color: var(--color-base);
    color: var(--color-base);
  }

  &[data-focus-visible-added] {
    text-shadow: ${boxShadow.focusShadow};
  }

  &:hover {
    color: var(--color-lighter);
    border-bottom-color: var(--color-lighter);
  }
`;
