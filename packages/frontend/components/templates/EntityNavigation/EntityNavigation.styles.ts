import styled from "styled-components";
import { boxShadow, transition } from "theme/base/variables";
import { aFocusReset, tLabel } from "theme/mixins";

export const Nav = styled.nav`
  --container-v-padding: 0;

  padding-block-start: var(--container-padding-md);
`;

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

export const TabLink = styled.span`
  display: inline-block;
  padding-block-end: var(--padding-sm);
  border-bottom: 2px solid transparent;
  color: var(--color-light);
  transition: ${transition.border};
  ${tLabel("sm")}

  ${aFocusReset}

  &[aria-current],
  a:focus-visible & {
    border-bottom-color: var(--color-base);
    color: var(--color-base);
  }

  a:focus-visible & {
    text-shadow: ${boxShadow.focusShadow};
  }

  &:hover {
    color: var(--color-lighter);
    border-bottom-color: var(--color-lighter);
    cursor: pointer;
  }

  a:focus-visible &,
  a:hover & {
    box-shadow: none;
  }
`;
