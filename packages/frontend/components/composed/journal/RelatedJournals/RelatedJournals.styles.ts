import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import {
  aBgCustom10,
  aBgNeutral00,
  fluidScale,
  lGrid,
  respond,
} from "theme/mixins";

// This section's background changes if bumped up against a white background
export const Section = styled.section`
  ${aBgNeutral00()}

  .a-bg-neutral00 + & {
    ${aBgCustom10()}
  }
`;

export const Inner = styled.div`
  padding-block-start: ${fluidScale("100px", "80px")};
  padding-block-end: ${fluidScale("100px", "80px")};

  > * + * {
    margin-block-start: ${pxToRem(50)};
  }
`;

export const HeaderBlock = styled.header`
  max-width: ${pxToRem(768)};
`;

export const HeaderText = styled.h3`
  margin-block-end: var(--padding-md);
`;

export const List = styled.ul`
  ${lGrid({
    columns: 4,
    colGap: pxToRem(36),
    rowGap: pxToRem(60),
  })}

  ${respond(`grid-template-columns: repeat(2, 1fr);`, 70)}
  ${respond(`grid-template-columns: 1fr;`, 50)}
`;

export const ItemLink = styled.a`
  display: block;
`;

export const ItemCover = styled.div`
  > figure > span {
    border: 1px solid var(--color-base-neutral20) !important;
  }

  ${respond(`max-width: ${pxToRem(140)};`, 50)}
`;

export const ItemText = styled.div`
  margin-block-start: ${pxToRem(20)};

  > * + * {
    margin-block-start: ${pxToRem(12)};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
