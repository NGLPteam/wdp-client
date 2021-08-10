import styled, { css } from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import MessageBlock from "./MessageBlock";
type BaseProps = React.ComponentProps<typeof MessageBlock>;

export const Wrapper = styled.div<Partial<BaseProps>>`
  ${({ type }) =>
    type === "error"
      ? css`
          --icon-background-color: var(--accent-color);
          --icon-foreground-color: var(--background-color);
        `
      : css`
          --icon-background-color: var(--brand30);
          --icon-foreground-color: var(--accent-color);
        `}

  border-radius: ${pxToRem(10)};
  padding: ${basePadding(15)};
  padding-block-end: ${basePadding(16)};
`;

export const Inner = styled.div`
  max-width: ${pxToRem(657)};
  margin-inline-start: auto;
  margin-inline-end: auto;
`;

export const Header = styled.h3`
  padding-block-start: ${basePadding(5)};
`;

export const Message = styled.div`
  padding-block-start: ${basePadding(4)};
`;

export const ButtonWrapper = styled.div`
  padding-block-start: ${basePadding(9)};
`;
