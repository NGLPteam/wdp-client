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
`;

export const HeaderBlock = styled.header`
  max-width: ${pxToRem(768)};
  margin-block-end: var(--padding-md);
`;

export const List = styled.ul`
  margin-block-end: ${pxToRem(50)};
  ${lGrid({
    columns: 4,
    colGap: pxToRem(36),
    rowGap: pxToRem(60),
  })}

  ${respond(`grid-template-columns: repeat(2, 1fr);`, 70)}
  ${respond(`grid-template-columns: 1fr;`, 50)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
