import styled, { css } from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import MessageBlock from "./MessageBlock";
type BaseProps = React.ComponentProps<typeof MessageBlock>;

export const Wrapper = styled.div<{ $type: BaseProps["type"] }>`
  ${({ $type }) =>
    $type === "error"
      ? css`
          --icon-background-color: var(--accent-color);
          --icon-foreground-color: var(--background-color);
        `
      : css`
          --icon-background-color: var(--brand30);
          --icon-foreground-color: var(--accent-color);
        `}

  border-radius: ${pxToRem(10)};
  padding: ${pxToRem(60)};
  padding-block-end: ${pxToRem(64)};
`;

export const Inner = styled.div`
  max-width: ${pxToRem(657)};
  margin-inline-start: auto;
  margin-inline-end: auto;
`;

export const Header = styled.h3`
  padding-block-start: ${pxToRem(20)};
`;

export const Message = styled.div`
  padding-block-start: ${pxToRem(16)};
`;

export const ButtonWrapper = styled.div`
  padding-block-start: ${pxToRem(36)};
`;
