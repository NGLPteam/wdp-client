import styled, { css } from "styled-components";
import { aBaseInput, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { IconFactory } from "components/factories";
import { noInsetSupport } from "theme/mixins/base";
import { tTruncate } from "theme/mixins/typography";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  --input-min-height: ${pxToRem("42px")};
  --input-padding: 0 ${basePadding(4)};
  --input-focus-background: var(--brand10);
  width: 100%;
  ${aBaseInput()}
`;

export const Icon = styled(IconFactory)``;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset-inline-end: 0;
  inset-block-start: 0;
  inset-block-end: 0;
  padding-inline-start: ${basePadding(4)};
  padding-inline-end: ${basePadding(4)};

  ${noInsetSupport(`top: 0; right: 0; bottom: 0;`)}
`;

// export const List = styled.ul<ListProps>``;

export const List = styled.ul<ListProps>`
  position: absolute;
  background-color: var(--input-focus-background, var(--brand10));
  border: 1px solid var(--accent-color);
  border-top: none;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
  inset-inline-start: 0;
  inset-inline-end: 0;
  inset-block-start: 0;
  max-height: 50vh;
  overflow-y: auto;
  transform: translateY(${pxToRem("41px")});

  display: none;
  pointer-events: none;
  z-index: -1;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      display: block;
      pointer-events: all;
      z-index: var(--z-index-dropdown);
    `}
    
  }

  ${noInsetSupport(`left: 0; right: 0; top: 0;`)}
`;

interface ListProps {
  $isOpen?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  padding-inline-start: ${basePadding(4)};
  padding-inline-end: ${basePadding(4)};
  padding-block-start: ${basePadding(3)};
  padding-block-end: ${basePadding(3)};
  ${tTruncate}

  &[aria-selected="true"] {
    background-color: var(--brand20);
  }
`;

interface ListItemProps {
  highlighted?: boolean;
}
