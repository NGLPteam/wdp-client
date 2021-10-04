import styled from "styled-components";
import { basePadding, aBgDark } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;

  &:focus {
    outline: 0;
  }
`;

export const List = styled.ul<ListProps>`
  --dropdown-list-item-padding: ${basePadding(2)} ${basePadding(6)};

  position: absolute;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  max-inline-size: 100vw;
  border-radius: ${pxToRem("4px")};
  padding: ${basePadding(4)} 0;
  color: var(--accent-light);
  transition: opacity 0.15s ease-out, visibility 0.15s ease-out;
  box-shadow: 0px 12px 24px -12px rgba(0, 0, 0, 0.3);
  margin-block-start: ${basePadding(1)};
  visibility: visible;
  opacity: 1;
  z-index: var(--z-index-dropdown);
  background-color: var(--background-light);

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
  color: var(--color);

  &:hover,
  &:focus-within:not(:hover) {
    ${aBgDark()}

    .a-bg-brand90 & {
      background: none;
    }
  }

  > * {
    width: 100%;
    padding: var(--dropdown-list-item-padding);
    border-radius: none;
    background: transparent;
  }

  > a {
    display: block;
    white-space: nowrap;

    &:focus {
      outline: none;
    }
  }
`;
