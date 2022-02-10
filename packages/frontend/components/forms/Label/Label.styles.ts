import styled from "styled-components";
import { tLabel } from "theme/mixins";

export const Label = styled.label`
  display: block;
  padding-block-end: var(--padding-xs);
  color: var(--color-light);
  ${tLabel("sm")}
`;
