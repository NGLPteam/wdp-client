import styled from "styled-components";
import { aGlow } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const List = styled.ul<{ $column?: true }>`
  display: flex;
  flex-wrap: wrap;
  margin-block-start: ${pxToRem(12)};

  ${({ $column }) => $column && `flex-direction: column`}
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: ${pxToRem(4)};
  background-color: var(--button-background);
  padding: ${pxToRem(5)} ${pxToRem(8)};
  margin-inline-end: ${pxToRem(12)};
  margin-block-end: ${pxToRem(12)};
  color: var(--accent-color);
  transition: var(--color-transition), var(--border-transition),
    var(--background-transition), var(--opacity-transition);
  opacity: var(--button-control-opacity, 1);
  visibility: var(--button-control-visibility, visible);

  &:disabled,
  &[aria-disabled="true"],
  [aria-disabled="true"] & {
    opacity: 0.4;
    cursor: default;
    pointer-events: none;
  }

  &:focus {
    outline: 0;
  }

  &:focus-visible:not(:hover) {
    background-color: var(--brand20);
    border-color: var(--brand100);
    ${aGlow("lightMode")}
  }

  &:hover:not(:disabled):not([aria-disabled="true"]) {
    background-color: var(--brand100);
    color: var(--neutral00);
  }

  &[aria-pressed="true"] {
    background-color: var(--brand20);
  }
`;

export const Text = styled.span`
  display: inline-block;
  padding-inline-end: ${pxToRem(4)};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;
