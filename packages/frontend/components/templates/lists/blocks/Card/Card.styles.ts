import styled from "styled-components";
import { containerWidths } from "theme/base/variables";

export const HeroImage = styled.div`
  min-block-size: 300px;
  background: var(--color-base-blueDark);
`;

export const Wrapper = styled.div`
  padding-block-end: var(--container-padding-xl);
`;

export const Header = styled.h3`
  padding-block-start: 1.5rem;
  margin-block-end: 1.5rem;
  max-inline-size: ${containerWidths.wide};
  margin-inline: auto;
`;
