import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { containerWidths } from "theme/base/variables";
import { tLineClamp } from "theme/mixins";

export const Section = styled.div`
  position: relative;
  padding-block-end: ${pxToRem(100)};

  &::before {
    content: "";
    display: block;
    position: absolute;
    background: var(--color-base-neutral90);
    height: calc(
      var(--FeaturedJournal-cover-height, ${pxToRem(300)}) +
        var(--container-padding-sm) * 2
    );
    width: 100vw;
    z-index: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  max-width: ${containerWidths.max};
  margin: 0 auto;
  justify-content: center;
`;

export const ListItem = styled.li`
  flex: 1 1 100%;
  z-index: 1;

  &[data-count="1"] {
    max-width: 480px;
  }
`;

export const ItemLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ItemCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(
    var(--FeaturedJournal-cover-height, ${pxToRem(300)}) +
      var(--container-padding-sm) * 2
  );
  padding-block-start: var(--container-padding-sm);
  padding-block-end: var(--container-padding-sm);
  padding-inline: var(--container-padding-sm);
`;

export const ItemTitle = styled.h4`
  flex: 1 1 auto;
  margin-block-end: ${pxToRem(24)};
  padding-block-start: ${pxToRem(20)};
  padding-inline: ${pxToRem(40)};
  text-align: center;
  ${tLineClamp(2)}
`;

export const ItemData = styled.div`
  margin-block-start: auto;
  padding-inline: ${pxToRem(40)};
  padding-block-end: ${pxToRem(30)};
  text-align: center;

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
`;
