import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Label = styled.label`
  ${tLabel("sm")};
  padding-block-end: ${pxToRem("6px")};
  color: var(--color-light);
`;
