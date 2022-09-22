import styled from "styled-components";
import { tLabel, aFocus, respond } from "theme/mixins";
import { transition } from "theme/base/variables";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid var(--color-custom70);
  border-radius: 78px;
  height: 32px;
  width: auto;

  ${respond(`width: 100%;`, 60)}
`;

export const SwitchButton = styled.button<{ $active?: boolean }>`
  ${tLabel("mix")}
  white-space: nowrap;
  transition: ${transition.color}, ${transition.background},
    ${transition.opacity};

  ${({ $active }) =>
    $active
      ? `
      background-color: var(--color-custom70);
      color: var(--color-base-neutral00);
      `
      : `
      background-color: var(--color-base-neutral00);
      color: var(--color-custom70);
      `}

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 78px;
    border-bottom-left-radius: 78px;
    padding-inline-start: 20px;
    padding-inline-end: 16px;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 78px;
    border-bottom-right-radius: 78px;
    padding-inline-end: 20px;
    padding-inline-start: 16px;
  }

  &[aria-disabled="true"] {
    cursor: default;
  }

  &:hover:not(:focus):not([aria-disabled="true"]) {
    background: var(--color-custom80);
    color: var(--color-base-neutral00);
  }

  ${aFocus(`
    background: var(--color-custom20);
    z-index: 10;
  `)}

  ${respond(`width: 50%;`, 60)}
`;
