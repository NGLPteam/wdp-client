import styled, { css } from "styled-components";
import { noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import ButtonControlGroup from "./ButtonControlGroup";

type BaseProps = React.ComponentProps<typeof ButtonControlGroup>;

type WrapperProps = { $breakpoint: BaseProps["breakpoint"]; $grid?: boolean };

export const ButtonWrapper = styled.div<WrapperProps>`
  display: inline-flex;
  gap: ${pxToRem(10)};

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(10)};
    }
  `)}

  ${({ $breakpoint }) =>
    $breakpoint &&
    respond(
      css`
        display: none;
      `,
      $breakpoint,
    )}

    ${({ $grid }) =>
    $grid && `display: grid; grid-template-columns: repeat(2, 1fr);`}
`;

export const DropdownWrapper = styled.div<WrapperProps>`
  display: none;

  ${({ $breakpoint }) =>
    $breakpoint &&
    respond(
      css`
        display: block;
      `,
      $breakpoint,
    )}
`;
