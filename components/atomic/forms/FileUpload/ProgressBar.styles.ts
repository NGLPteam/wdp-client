import styled from "styled-components";
import { noInsetSupport } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Bar = styled.div`
  position: sticky;
  inset-block-start: 0;
  height: ${pxToRem(4)};
  width: 100%;
  background: var(--brand30);

  ${noInsetSupport(`top: 0;`)}
`;

export const Percent = styled.span`
  display: block;
  height: 100%;
  width: 0px;
  transition: width var(--base-duration) var(--base-timing);
  background: var(--brand50);
`;
