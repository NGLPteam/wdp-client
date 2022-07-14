import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

type Props = { $visible: boolean };

export const FieldWrapper = styled.div`
  transition: height 2s;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  min-height: ${pxToRem(42)};
  background-color: var(--input-background-color);
  width: 100%;
  z-index: 2;

  > *:last-child {
    border-color: var(--input-border-color);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-left: 0;
    padding-inline-start: ${pxToRem(16)};
    padding-inline-end: ${pxToRem(16)};
  }
`;

export const SelectorWrapper = styled.div<Props>`
  display: none;
  ${({ $visible }) => $visible && `display: block;`}

  width: 100%;
  z-index: 1;
`;
