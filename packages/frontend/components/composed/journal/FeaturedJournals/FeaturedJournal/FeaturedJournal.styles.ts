import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import {
  fluidScale,
  tLineClamp,
  aLinkHoverFocus,
  aLinkBase,
  aFocusReset,
  aBgNeutral90,
} from "theme/mixins";

export const ItemLinkText = styled.span`
  ${aLinkBase}
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover,
  &[data-focus-visible-added] {
    ${ItemLinkText} {
      ${aLinkHoverFocus}
    }
  }
`;

export const ItemCover = styled.div`
  ${aBgNeutral90}
  --FeaturedJournals-cover-v-padding: ${fluidScale("36px", "60px")};

  background-color: var(--FeaturedJournalsCover-background-color);
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(
    var(--FeaturedJournals-cover-height, ${pxToRem(300)}) +
      var(--FeaturedJournals-cover-v-padding) * 2
  );
  padding-block-start: var(--FeaturedJournals-cover-v-padding);
  padding-block-end: var(--FeaturedJournals-cover-v-padding);
  padding-inline-start: var(--container-padding-sm);
  padding-inline-end: var(--container-padding-sm);
`;

export const CoverWrapper = styled.span`
  ${aFocusReset}

  svg {
    width: 100%;
    max-width: 225px !important;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(410 + 60)};
  margin: 0 auto;
  padding-inline-start: ${pxToRem(30)};
  padding-inline-end: ${pxToRem(30)};
  padding-block-start: ${pxToRem(20)};
  padding-block-end: ${fluidScale("80px", "60px")};
  text-align: center;
  height: 100%;

  ${aFocusReset}
`;

export const ItemTitle = styled.h4`
  ${tLineClamp(2)}
  padding-block-end: 1px;
`;

export const ItemSubtitle = styled.div`
  padding-block-start: var(--padding-xs);
  margin-block-end: ${pxToRem(24)};
`;

export const ItemData = styled.div`
  margin-block-start: auto;

  > * + * {
    &:before {
      content: ", ";
    }
  }
`;
