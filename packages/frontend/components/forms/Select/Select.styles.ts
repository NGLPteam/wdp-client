import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled, { css } from "styled-components";
import { aButton, aFocusReset } from "theme/mixins/appearance";

export const Wrapper = styled.div<{
  $block?: true;
  $size?: "lg";
  $secondary?: true;
}>`
  position: relative;

  ${({ $size }) => $size === "lg" && "min-height: 40px;"}

  ${({ $block }) =>
    $block &&
    css`
      display: flex;
      width: 100%;
    `}

  ${({ $secondary }) =>
    $secondary
      ? css`
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-xs);
        `
      : aButton("secondary", "sm")}

  option {
    color: var(--color-base);

    &:disabled {
      color: var(--color-light);
    }
  }
`;

export const Select = styled.select<{ $secondary?: true }>`
  ${aInputReset}
  ${aFocusReset}
  
  width: 100%;

  ${({ $secondary }) =>
    $secondary
      ? css`
          padding-inline-start: 16px;
          padding-inline-end: 16px;
          padding-block-start: 8px;
          padding-block-end: 8px;
        `
      : `padding-inline-end: ${pxToRem(18)};`}
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  right: 12px;
  height: 100%;
`;
