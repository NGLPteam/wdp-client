import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:focus {
    outline: 0;
  }
`;

export const List = styled.ul<ListProps>`
  --dropdown-list-item-padding: ${pxToRem(8)} ${pxToRem(24)};

  position: absolute;
  top: 0;
  left: 100%;
  margin-inline-start: ${pxToRem(8)};
  display: flex;
  align-items: stretch;
  flex-direction: column;
  max-inline-size: 100vw;
  border-radius: ${pxToRem(8)};
  border: 1px solid var(--color-base-neutral30);
  padding-inline: ${pxToRem(24)};
  padding-block-start: ${pxToRem(16)};
  padding-block-end: ${pxToRem(24)};
  transition: opacity 0.15s ease-out, visibility 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
  margin-block-start: ${pxToRem(4)};
  visibility: visible;
  opacity: 1;
  z-index: var(--z-index-dropdown);
  background-color: var(--dropdown-background);

  &[aria-hidden="true"] {
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }

  ${({ right }) => right && `right: 0;`}
`;

interface ListProps {
  right?: boolean;
}

export const Item = styled.li`
  transition: var(--color-transition), var(--background-transition);
  text-align: start;
  color: var(--color-base);

  &:hover,
  &:focus-within:not(:hover) {
    .a-bg-brand90 & {
      background: none;
    }
  }

  > * {
    display: flex;
    white-space: nowrap;
    width: 100%;
    padding: var(--dropdown-list-item-padding);
    border-radius: none;
    background: transparent;
  }
`;
