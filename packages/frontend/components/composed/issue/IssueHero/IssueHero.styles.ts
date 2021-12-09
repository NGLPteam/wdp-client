import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const HeroInner = styled.div`
  padding-block-start: var(--container-padding-sm);
  padding-block-end: var(--container-padding-lg);
`;

export const Title = styled.h2`
  margin-block-end: var(--padding-rg);
`;

export const JournalMeta = styled.div`
  justify-content: space-between;
  padding-block-end: var(--padding-rg);
  border-bottom: 1px solid var(--color-base-neutral70);
`;

export const Number = styled.span`
  color: var(--color-base-neutral80);
`;

export const IssueWrapper = styled.div`
  width: 100%;
  flex-wrap: nowrap;
  padding-block-start: ${pxToRem(46)};

  > * {
    flex-grow: 1;
  }

  > * + * {
    margin-inline-start: ${pxToRem(42)};
  }
`;

export const IssueMeta = styled.div`
  max-width: ${pxToRem(596)};
`;

export const Issue = styled.h3`
  margin-block-end: var(--padding-rg);
`;

export const Volume = styled.span`
  color: var(--color-base-neutral70);
  padding-inline-start: var(--padding-md);
`;

export const Description = styled.div`
  margin-block-end: var(--padding-md);
`;

export const DOI = styled.div`
  margin-block-start: var(--padding-sm);
`;
