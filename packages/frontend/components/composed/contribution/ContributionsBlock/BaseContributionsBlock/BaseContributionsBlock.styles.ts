import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { lGrid } from "theme/mixins";

export const SectionInner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);
`;

export const List = styled.ul`
  ${lGrid()}
  row-gap: ${pxToRem(30)};
  padding-block-start: var(--padding-xl);
`;
