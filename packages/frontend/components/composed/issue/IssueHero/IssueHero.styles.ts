import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { fluidScale, lGrid, respond, tHeading } from "theme/mixins";

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
  padding-block-start: ${fluidScale("46px", "40px")};
`;

export const IssueText = styled.div`
  grid-column: 1 / 9;
  display: flex;

  ${respond(`grid-column: 1 / -1;`, 100)}
  ${respond(`flex-wrap: wrap;`, 50)}
`;

export const IssueCover = styled.div`
  margin-inline-end: ${pxToRem(38)};
  flex: 1 0 auto;
  max-width: ${fluidScale("225px", "180px")};

  ${respond(
    `
    margin-block-end: ${pxToRem(42)};
  `,
    50
  )};
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
  width: 100%;

  > * + * {
    margin-block-start: var(--padding-md);
  }
`;

export const IssueTitle = styled.h3`
  padding-inline-end: var(--padding-md);

  ${respond(`display: inline-block;`, 70, "min")}
`;

const VOLUME_BREAK = 70;

export const Volume = styled.span`
  ${tHeading(3)}
  color: var(--color-base-neutral70);

  ${respond(`display: none`, VOLUME_BREAK)}
`;

export const VolumeMobile = styled.p`
  display: none;

  ${respond(`display: block;`, VOLUME_BREAK)}
`;

export const Description = styled.div`
  > * + * {
    margin-block-start: var(--padding-xs);
  }
`;
