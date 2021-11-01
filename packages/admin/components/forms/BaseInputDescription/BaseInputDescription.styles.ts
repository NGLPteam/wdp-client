import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Description = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  padding-block-start: ${pxToRem(8)};
`;
