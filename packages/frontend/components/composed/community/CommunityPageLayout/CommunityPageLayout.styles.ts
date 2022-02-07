import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tHeading } from "theme/mixins/typography";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-sm);
`;

export const Content = styled.div`
  max-width: ${pxToRem(670)};

  h1,
  h2 {
    ${tHeading(3)}
  }
`;
