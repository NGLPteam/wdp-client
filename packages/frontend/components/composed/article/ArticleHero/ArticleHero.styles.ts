import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond, lGrid } from "theme/mixins";

export const HeroInner = styled.div`
  ${lGrid()}
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${respond(
    `
    display: grid; 
    grid-template-rows: repeat(2, auto); 
    grid-template-columns: 1fr;
    `,
    70
  )}
`;

export const ParentBlock = styled.div`
  padding-block-start: ${pxToRem(10)};
  padding-block-end: ${pxToRem(10)};
`;

export const JournalBlock = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-block-end: ${pxToRem(10)};
  border-bottom: 1px solid var(--border-color);
`;

export const IssueBlock = styled.div`
  display: flex;
  align-items: flex-end;
  padding-block-start: ${pxToRem(10)};

  > * + * {
    padding-inline-start: ${pxToRem(12)};

    &:last-child {
      margin-inline-start: auto;
    }
  }
`;

export const LeftSide = styled.div`
  grid-column: span 8;

  ${respond(`grid-column: span 9;`, 100)}
  ${respond(`grid-column: 1;`, 70)}
`;

export const RightSide = styled.div`
  grid-column: 10 / span 3;

  ${respond(`grid-column: span 3;`, 100)}
  ${respond(`grid-column: 1;`, 70)}
`;

export const TitleBlock = styled.div`
  padding-block-end: var(--padding-lg);

  > * + * {
    padding-block-start: var(--padding-sm);
  }
`;

export const DataBlock = styled.div`
  padding-block-end: ${pxToRem(20)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const Summary = styled.p`
  padding-block-end: ${pxToRem(28)};
`;
