import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { aBaseInput } from "theme/mixins/appearance";

export const Wrapper = styled.div<{
  css?: Record<string, string> | boolean | undefined;
}>`
  display: flex;
  flex-direction: column;
  flex-basis: var(--form-grid-item-width);
`;

export const Description = styled.div<{ $descriptionTop?: boolean }>`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  ${({ $descriptionTop }) =>
    $descriptionTop
      ? `padding-block-end: ${pxToRem(8)}`
      : `padding-block-start: ${pxToRem(8)}`};
`;

export const Input = styled.div`
  ${aBaseInput()}
  height: ${pxToRem(42)};
  padding-inline: ${pxToRem(16)};
  padding-block: ${pxToRem(10)};

  &:hover {
    border-color: var(--input-border-color);
  }
`;
