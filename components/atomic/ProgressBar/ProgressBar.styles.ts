import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Bar = styled.div`
  background: var(--brand30);
  height: ${pxToRem(4)};
`;

export const Percent = styled.span`
  display: block;
  background: var(--brand50);
  height: 100%;
  width: 0px;
  transition: width var(--base-duration) var(--base-timing);
`;
