import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Fieldset = styled.fieldset`
  /* TODO: Replace */
  padding-block-start: ${pxToRem("12px")};
  padding: 2em;
  border: 1px solid grey;
`;

export const Legend = styled.legend`
  ${tLabel("lg")};
  padding-block-end: ${pxToRem("6px")};
  color: var(--color-light);
`;
