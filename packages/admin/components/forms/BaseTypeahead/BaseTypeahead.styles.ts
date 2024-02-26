import styled from "styled-components";
import { aBaseInput } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { noInsetSupport } from "theme/mixins/base";
import { tTruncate } from "theme/mixins/typography";
import BaseLoadingIcon from "components/atomic/loading/LoadingIcon";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input<{ $withBrowse: boolean }>`
  --input-min-height: ${pxToRem(42)};
  --input-padding: 0 ${pxToRem(16)};
  --input-focus-background: var(--brand10);
  --input-border-radius: ${pxToRem(4)};
  width: 100%;
  ${aBaseInput()}
  padding-inline-end: 2.75rem;
  ${tTruncate}

  ${({ $withBrowse }) =>
    $withBrowse &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    `}

  [aria-expanded="true"] > & {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Button = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset-inline-end: 0;
  inset-block-start: 0;
  inset-block-end: 0;
  padding-inline-start: ${pxToRem(16)};
  padding-inline-end: ${pxToRem(16)};

  ${noInsetSupport(`top: 0; right: 0; bottom: 0;`)}
`;

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
  transform: translateY(${pxToRem(41)});
  z-index: var(--z-index-dropdown);
  opacity: 0;

  ${noInsetSupport(`left: 0; right: 0; top: 0;`)}

  &[open] {
    opacity: 1;
  }
`;

interface ListProps {
  open?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  cursor: pointer;
  padding-inline-start: ${pxToRem(16)};
  padding-inline-end: ${pxToRem(16)};
  padding-block-start: ${pxToRem(12)};
  padding-block-end: ${pxToRem(12)};
  ${tTruncate}

  &[aria-selected="true"] {
    background-color: var(--brand20);
  }
`;

interface ListItemProps {
  highlighted?: boolean;
}

export const LoadingIcon = styled(BaseLoadingIcon)`
  margin-inline-end: ${pxToRem(10)};
`;
