import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Disclaimer = styled.span`
  display: inline-block;
  padding-block-end: ${pxToRem(6)};
  color: var(--neutral70);
  padding: ${pxToRem(14)} ${pxToRem(16)};
  border: 1px solid var(--neutral70);
  border-radius: 4px;
  background-color: var(--brand10);
  font-size: var(--font-size-sm);
`;
