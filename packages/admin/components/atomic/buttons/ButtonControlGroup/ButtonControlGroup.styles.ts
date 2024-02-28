import styled, { css } from "styled-components";
import { noFlexGapSupport, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import ButtonControlGroup from "./ButtonControlGroup";

type BaseProps = React.ComponentProps<typeof ButtonControlGroup>;

type WrapperProps = Pick<BaseProps, "breakpoint">;

export const ButtonWrapper = styled.div<WrapperProps>`
  display: inline-flex;
  gap: ${pxToRem(10)};

  ${noFlexGapSupport(`
    > * + * {
      margin-inline-start: ${pxToRem(10)};
    }
  `)}

  ${({ breakpoint }) =>
    breakpoint &&
    respond(
      css`
        display: none;
      `,
      breakpoint,
    )}
`;

export const DropdownWrapper = styled.div<WrapperProps>`
  display: none;

  ${({ breakpoint }) =>
    breakpoint &&
    respond(
      css`
        display: block;
      `,
      breakpoint,
    )}
`;
