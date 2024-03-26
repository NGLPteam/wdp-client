import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tHeading } from "theme/mixins/typography";

export const Content = styled.div`
  max-width: ${pxToRem(768)};
  padding-block-start: var(--container-padding-md);
  padding-block-end: var(--container-padding-xl);

  h1,
  h2 {
    ${tHeading(3)}
  }
`;

export const LoadingWrapper = styled.div`
  min-height: 40vh;
  padding-block-start: 20%;
`;
