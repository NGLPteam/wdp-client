import styled from "styled-components";
import BaseImage from "next/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale, respond } from "theme/mixins";

const LAYOUT_BREAK = 120;

export const Hero = styled.header`
  --CommunityHero-image-height: ${fluidScale("490px", "200px")};
  position: relative;
  display: flex;

  &[data-hero-image="true"] {
    min-height: var(--CommunityHero-image-height);
  }

  &[data-hero-layout="ONE_COLUMN"] {
    flex-direction: column;
    justify-content: center;
  }

  &[data-hero-layout="TWO_COLUMN"] {
    ${respond(`flex-wrap: wrap;`, LAYOUT_BREAK)}
  }
`;

export const HeroInner = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  padding-block-start: var(--container-padding-lg);

  [data-hero-image="true"] & {
    padding-block-end: var(--container-padding-lg);
  }

  [data-hero-layout="ONE_COLUMN"] & {
    flex: 0 0 auto;
    width: 100%;
  }

  [data-hero-layout="TWO_COLUMN"] & {
    flex: 1 1 639px;
    margin-right: 0;

    ${respond(`max-width: 639px;`, LAYOUT_BREAK, "min")}
  }
`;

export const Summary = styled.div`
  padding-block-start: ${pxToRem(29)};
`;

export const ImageWrapper = styled.div`
  [data-hero-layout="TWO_COLUMN"] & {
    position: relative;
    flex: 1 1 50vw;
    min-height: var(--CommunityHero-image-height);

    ${respond(`max-width: 50vw;`, LAYOUT_BREAK, "min")}
  }
`;

export const Image = styled(BaseImage)`
  [data-hero-layout="ONE_COLUMN"] & {
    opacity: 0.3;
  }
`;
