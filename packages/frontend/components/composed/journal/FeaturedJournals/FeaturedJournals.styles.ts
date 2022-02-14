import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { containerWidths } from "theme/base/variables";
import { respond, fluidScale } from "theme/mixins";

const DESKTOP_BREAK = 100;

export const Section = styled.section`
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-block-start: ${pxToRem(50)};
  padding-block-end: ${fluidScale("96px", "80px")};
`;
