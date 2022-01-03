import styled from "styled-components";
// eslint-disable-next-line import/no-named-default
import { default as BaseImage } from "next/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aFocus, fluidScale, respond } from "theme/mixins";
import { NamedLink as BaseNamedLink } from "components/atomic";
import { transition } from "theme/base/variables";

export const SectionInner = styled.div`
  padding-block-start: ${fluidScale("100px", "60px")};
  padding-block-end: ${fluidScale("120px", "80px")};
`;

export const Header = styled.h3`
  margin-block-end: ${pxToRem(36)};
`;

export const List = styled.ul`
  --FeaturedCollectionsGrid--gap: ${fluidScale("30px", "10px")};
  display: flex;
  flex-wrap: wrap;
  gap: var(--FeaturedCollectionsGrid--gap);

  ${respond(`--FeaturedCollectionsGrid--gap: ${pxToRem(36)};`, 50)}
`;

export const Item = styled.li`
  position: relative;
  flex: 0 1 calc(33% - var(--FeaturedCollectionsGrid--gap));
  border-radius: ${pxToRem(16)};
  overflow: hidden;
  background: var(--color-base-neutral90);
  transition: ${transition.background};

  ${respond(`flex: 1 1 auto;`, 50)}

  &:hover, &:focus-within {
    background: var(--color-base-neutral80);
  }
`;

export const Image = styled(BaseImage)`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
`;

export const NamedLink = styled(BaseNamedLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 336 / 267;
  color: var(--color-base-neutral00);
  padding: ${pxToRem(20)};
  text-align: center;

  ${respond(`aspect-ratio: 315 / 220;`, 50)}

  ${aFocus()}

  > span {
    position: relative;
    z-index: 1;
  }
`;
