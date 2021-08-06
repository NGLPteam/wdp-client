import React from "react";
import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { basePadding } from "theme/mixins/appearance";

const Button = styled.button<Props>`
  --button-background-color: var(--accent-color);
  --button-text-color: var(--background-color);
  --button-hover-color: var(--brand70);
  --button-focus-color: var(--brand50);
  --button-focus-border: var(--brand100);
  --button-disabled-opacity: 0.35;

  ${({ secondary }) =>
    secondary &&
    css`
      --button-background-color: var(--button-background);
      --button-text-color: var(--accent-color);
      --button-hover-color: var(--brand20);
      --button-focus-color: var(--brand20);
      --button-disabled-opacity: 0.4;
    `}

  ${tLabel("lg")}
  border: 1px solid transparent;
  border-radius: ${pxToRem("6px")};
  background-color: var(--button-background-color);
  padding: ${basePadding(3)} ${basePadding(8)};
  color: var(--button-text-color);
  transition: var(--color-transition), var(--border-transition),
    var(--background-transition), var(--opacity-transition);

  &:hover {
    --button-background-color: var(--button-hover-color);
  }

  &:focus {
    outline: 0;
  }

  &:disabled,
  [data-disabled="true"] {
    opacity: var(--button-disabled-opacity);
  }

  &:focus-visible:not(:hover) {
    --button-background-color: var(--button-focus-color);
    border-color: var(--button-focus-border);
  }
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean;
}

export default Button;
