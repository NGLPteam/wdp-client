import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const SectionInner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: ${pxToRem(100)};
`;
