import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { containerWidths } from "theme/base/variables";
import {
  respond,
  fluidScale,
  tLineClamp,
  aLinkHoverFocus,
  aLinkBase,
  aFocusReset,
} from "theme/mixins";

const DESKTOP_BREAK = 100;

export const Section = styled.div`
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  max-width: ${containerWidths.max};
  margin: 0 auto;
  justify-content: center;

  ${respond(`flex-wrap: wrap;`, DESKTOP_BREAK)}
  ${respond(`flex-direction: column;`, 50)}
`;

export const ListItem = styled.li`
  --FeaturedJournalsCover-background-color: var(--color-base-neutral90);

  flex: 1 1 30%;
  z-index: 1;

  /* Even journals have a lighter bg color */
  &:nth-child(even) {
    --FeaturedJournalsCover-background-color: var(--color-base-neutral80);
  }

  &:first-child {
    &::before {
      left: 0;
    }
  }

  /* Extend color to the edges of the first and last item */
  &:first-child,
  &:last-child:nth-child(even) {
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      height: calc(
        var(--FeaturedJournals-cover-height, ${pxToRem(300)}) +
          var(--container-padding-sm) * 2
      );
      width: 100vw;
      z-index: -1;
      background: var(--FeaturedJournalsCover-background-color);

      ${respond(`display: none;`, DESKTOP_BREAK)}
    }
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ItemCover = styled.div`
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

export const CoverLink = styled.a`
  display: inline-block;

  svg {
    width: 100%;
  }
`;

export const ItemLinkText = styled.span`
  ${aLinkBase}
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

  &:hover,
  &:focus-visible {
    ${ItemLinkText} {
      ${aLinkHoverFocus}
    }
  }
`;

export const ItemTitle = styled.h4`
  ${tLineClamp(2)}
  padding-block-end: 1px;
`;

export const ItemSubtitle = styled.div`
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: ${pxToRem(50)};
  padding-block-end: ${fluidScale("96px", "80px")};
`;
