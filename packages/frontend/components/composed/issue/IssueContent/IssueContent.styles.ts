import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Section = styled.section`
  padding-block-start: ${pxToRem(80)};
  padding-block-end: var(--container-padding-xlg);
`;
