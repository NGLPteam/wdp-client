import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { aGlow, basePadding } from "theme/mixins/appearance";

import BaseButtonControl from "./ButtonControl";
type BaseProps = React.ComponentProps<typeof BaseButtonControl>;

export const ButtonControl = styled.button<BaseProps>`
  min-height: ${pxToRem("32px")};
  display: inline-block;
  border: 1px solid transparent;
  border-radius: ${pxToRem("4px")};
  background-color: var(--brand10);
  padding: ${pxToRem("5px")} ${pxToRem("8px")};
  ${tLabel("sm")}
  text-align: left;
  color: var(--brand100);
  transition: var(--color-transition), var(--border-transition),
    var(--background-transition), var(--opacity-transition);

  > span {
    display: inline-block;
    min-width: ${basePadding(25)};
  }

  ${({ icon }) =>
    icon &&
    css`
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      > span {
        min-width: ${basePadding(21)};
        padding-inline-end: ${pxToRem("10px")};
      }
    `}

  &:hover {
    background-color: var(--brand100);
    color: var(--neutral00);
  }

  &:focus {
    outline: 0;
  }

  &:focus-visible:not(:hover) {
    background-color: var(--brand20);
    border-color: var(--brand100);
    ${aGlow("lightMode")}
  }

  &:disabled,
  [aria-disabled="true"] {
    opacity: 0.4;
  }
`;

export const ButtonControlIcon = styled(ButtonControl)<BaseProps>`
  padding: ${pxToRem("7px")};
  min-width: auto;
`;
