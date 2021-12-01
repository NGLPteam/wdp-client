import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(670)};
`;

export const Title = styled.h2`
  margin-block-end: var(--padding-rg);
`;

export const Subtitle = styled.h3`
  margin-block-end: var(--padding-xl);
`;

export const ISSN = styled.div`
  color: var(--color-base-neutral80);
`;

export const Number = styled.span`
  color: var(--color-base);
`;
