import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: var(--form-grid-item-width);
`;

export const Description = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  padding-block-start: ${pxToRem(8)};
`;
