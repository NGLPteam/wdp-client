import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Identifier = styled.span`
  font-weight: var(--font-weight-medium);
  color: var(--accent-color);
`;

export const Name = styled.span`
  color: var(--color-light);
  display: block;
  margin-block-start: ${pxToRem(4)};
  max-width: 100%;
  overflow-x: hidden;
  white-space: wrap;
`;
