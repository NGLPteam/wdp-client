import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { fluidScale } from "theme/mixins";

export const Header = styled.div`
  padding-block-start: ${fluidScale("80px", "60px")};
`;

export const Text = styled.div`
  max-width: ${pxToRem(670)};
  padding-block-start: var(--padding-rg);
`;
