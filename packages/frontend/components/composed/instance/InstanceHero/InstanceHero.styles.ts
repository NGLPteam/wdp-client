import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";

export const Header = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);
`;

export const Text = styled.div`
  max-width: ${pxToRem(670)};
  padding-block-start: var(--padding-md);
`;
