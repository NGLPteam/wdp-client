import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import {
  respond,
  fluidScale,
  tLineClamp,
  aLinkHoverFocus,
  aLinkBase,
  aFocusReset,
  aBgNeutral90,
} from "theme/mixins";
import { containerWidths } from "theme/base/variables";

const DESKTOP_BREAK = 100;

export const Item = styled.li`
  --FeaturedJournalsCover-background-color: var(--color-base-neutral90);

  flex: 1 1 30%;
  z-index: 1;

  .a-bg-neutral90 & {
    --FeaturedJournalsCover-background-color: var(--color-custom10);
  }

  /* Even journals have a lighter bg color */
  &:nth-child(even) {
    --FeaturedJournalsCover-background-color: var(--color-base-neutral80);

    .a-bg-neutral90 & {
      --FeaturedJournalsCover-background-color: var(--color-custom20);
    }
  }

  &:first-child {
    &::before {
      left: 0;
    }
  }

  &:last-child {
    &::before {
      right: 0;
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
      background: var(--FeaturedJournalsCover-background-color);
      inline-size: max(
        calc((100vw - ${containerWidths.max}) / 2),
        var(--container-v-padding)
      );

      ${respond(`display: none;`, DESKTOP_BREAK)};
    }
  }
`;

export const ItemLinkText = styled.span`
  ${aLinkBase}
`;

export const Header = styled.h4`
  ${tLineClamp(2)}
`;

export const Subheader = styled.span`
  display: block;
  color: var(--color-base-neutral70);
  font-size: var(--font-size-base);
`;

export const ItemInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover,
  a:focus-visible & {
    ${Header} > span,
    ${Subheader} > span {
      ${aLinkHoverFocus}
    }
  }
`;

export const CoverWrapper = styled.div`
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

export const CoverInner = styled.span`
  ${aFocusReset}

  svg {
    width: 100%;
    max-width: 225px !important;
  }
`;

export const TextContent = styled.div`
  padding-block: 1.25rem;
  padding-inline: 2.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: var(--font-size-base-sm);
`;

export const TitleBlock = styled.div`
  > * + * {
    margin-block-start: 0.5rem;
  }
`;

export const ContextOne = styled.span`
  color: var(--color-base-neutral70);
`;

export const Contributors = styled.span`
  display: block;
  min-height: ${pxToRem(22)};
`;

export const Group = styled.div`
  margin-block-start: 1.5rem;
  color: var(--color-base-neutral70);

  > span {
    display: block;
  }

  > * + * {
    margin-block-start: 0.25rem;
  }
`;
