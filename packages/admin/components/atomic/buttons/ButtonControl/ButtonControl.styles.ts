import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { aGlow } from "theme/mixins/appearance";

import BaseButtonControl from "./ButtonControl";
type BaseProps = React.ComponentProps<typeof BaseButtonControl>;

export const ButtonControl = styled.button<Pick<BaseProps, "size" | "icon">>`
  min-height: ${pxToRem(32)};
  display: inline-block;
  border: 1px solid transparent;
  border-radius: ${pxToRem(4)};
  background-color: var(--button-background);
  padding: ${pxToRem(5)} ${pxToRem(8)};
  ${tLabel("sm")}
  text-align: start;
  color: var(--accent-color);
  transition: var(--color-transition), var(--border-transition),
    var(--background-transition), var(--opacity-transition);
  opacity: var(--button-control-opacity, 1);
  visibility: var(--button-control-visibility, visible);

  ${({ size }) =>
    size === "large" &&
    css`
      padding: ${pxToRem(12)};
    `}

  ${({ icon }) =>
    icon &&
    css`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
    `}

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

export const ButtonText = styled.span<Pick<BaseProps, "size" | "icon">>`
  display: inline-block;

  ${({ size }) =>
    size === "large" &&
    css`
      padding-inline-start: ${pxToRem(4)};
    `}

  ${({ icon }) =>
    icon &&
    css`
      padding-inline-end: ${pxToRem(10)};
    `}
`;
