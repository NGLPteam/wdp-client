import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { containerWidths } from "theme/base/variables";
import { respond, lGrid, fluidScale } from "theme/mixins";
import ArrowList from "@/components/atomic/ArrowList";

const DESKTOP_BREAK = 100;

export const BGPositioner = styled.div`
  position: relative;
`;

export const CardList = styled.ul`
  list-style-type: none;
  display: flex;
  max-width: ${containerWidths.max};
  margin: 0 auto;
  justify-content: center;

  ${respond(`flex-wrap: wrap;`, DESKTOP_BREAK)}
  ${respond(`flex-direction: column;`, 50)}
`;

export const GridList = styled.ul`
  margin-block-end: ${pxToRem(50)};
  ${lGrid({
    columns: 4,
    colGap: pxToRem(36),
    rowGap: pxToRem(60),
  })}

  ${respond(`grid-template-columns: repeat(2, 1fr);`, 70)}
${respond(`grid-template-columns: 1fr;`, 50)}
`;

export const SummaryList = styled.ul`
  border-bottom: 1px solid var(--border-color);
  padding-block-end: var(--padding-xl);
`;

export const PromoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${fluidScale("30px", "10px")};

  ${respond(
    `
        grid-template-columns: auto;
        gap: ${pxToRem(30)};
    `,
    50,
  )}
`;

export const CompactList = styled(ArrowList)`
  padding-block-start: ${pxToRem(28)};
  padding-block-end: var(--padding-lg);
  border-bottom: 1px solid var(--border-color);
`;
