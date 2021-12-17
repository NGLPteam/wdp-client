import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-sm);
  padding-block-end: var(--container-padding-lg);
`;

export const Title = styled.h2`
  margin-block-end: var(--padding-rg);
`;

export const JournalMeta = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block-end: var(--padding-rg);
  border-bottom: 1px solid var(--color-base-neutral70);
`;

export const Number = styled.span`
  color: var(--color-base-neutral80);
`;

export const IssueWrapper = styled.div`
  ${lGrid({
    rowGap: "var(--padding-xl)",
  })}
  padding-block-start: ${pxToRem(46)};
`;

export const IssueText = styled.div`
  grid-column: 1 / 9;
  display: flex;

  ${respond(`grid-column: 1 / -1;`, 100)}
  ${respond(`flex-wrap: wrap;`, 50)}
`;

export const IssueMeta = styled.div`
  grid-column: 10 / -1;

  ${respond(
    `
    grid-column: 1 / -1;
    padding-block-start: var(--padding-rg);
    border-top: 1px solid var(--border-color);
  `,
    100
  )}

  > * + * {
    margin-block-start: var(--padding-rg);
  }
`;

export const Issue = styled.div`
  margin-block-end: var(--padding-rg);
  margin-inline-start: ${pxToRem(38)};

  ${respond(
    `
    margin-inline-start: 0;
    margin-block-start: ${pxToRem(42)};
  `,
    50
  )}

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;

export const Volume = styled.span`
  color: var(--color-base-neutral70);
  padding-inline-start: var(--padding-md);
`;

export const Description = styled.div`
  margin-block-end: var(--padding-md);

  > * + * {
    margin-block-start: var(--padding-xs);
  }
`;
