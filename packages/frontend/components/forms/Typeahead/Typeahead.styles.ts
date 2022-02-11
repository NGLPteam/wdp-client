import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset, noInsetSupport } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { boxShadow } from "theme/base/variables";
import { tCopySmall } from "theme/mixins";
import { aFocusReset } from "theme/mixins/appearance";

export const Wrapper = styled.div``;

export const ComboboxWrapper = styled.div``;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-xs);
  background: var(--color-base-neutral00);

  [aria-expanded="true"] > & {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Typeahead = styled.input`
  ${aInputReset}
  ${aFocusReset}
  ${tCopySmall}
  padding-block-start: var(--padding-sm);
  padding-block-end: var(--padding-sm);
  padding-inline-start: var(--padding-rg);
  padding-inline-end: var(--padding-rg);
  min-height: ${pxToRem(40)};
  width: 100%;
`;

export const IconButton = styled.button`
  align-items: center;
  padding-block-start: var(--padding-sm);
  padding-block-end: var(--padding-sm);
  padding-inline-start: var(--padding-rg);
  padding-inline-end: var(--padding-rg);
`;

export const List = styled.ul`
  position: absolute;
  background: var(--color-base-neutral00);
  border: 1px solid var(--border-color);
  border-top: none;
  border-bottom-left-radius: var(--border-radius-xs);
  border-bottom-right-radius: var(--border-radius-xs);
  box-shadow: ${boxShadow.popUp};
  inset-inline-start: -1px;
  inset-inline-end: -1px;
  inset-block-start: 0;
  max-height: 50vh;
  overflow-y: auto;
  transform: translateY(${pxToRem(40)});
  z-index: var(--z-index-dropdown);
  opacity: 0;

  ${noInsetSupport(`left: -1px; right: -1px; top: 0;`)}

  &[open] {
    opacity: 1;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  padding-block-start: var(--padding-sm);
  padding-block-end: var(--padding-sm);
  padding-inline-start: var(--padding-rg);
  padding-inline-end: var(--padding-rg);
  ${tCopySmall}

  &[aria-selected="true"] {
    background-color: var(--color-base-neutral10);
  }

  &:last-of-type {
    padding-block-end: var(--padding-rg);
  }
`;
