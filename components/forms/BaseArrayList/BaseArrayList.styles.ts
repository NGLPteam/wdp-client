import styled from "styled-components";
import { aGlow, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-block-start: ${basePadding(3)};
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: ${pxToRem("4px")};
  background-color: var(--button-background);
  padding: ${pxToRem("5px")} ${pxToRem("8px")};
  margin-inline-end: ${basePadding(3)};
  margin-block-end: ${basePadding(3)};
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
  padding-inline-end: ${basePadding(1)};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
`;
