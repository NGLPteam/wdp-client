import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const HeroInner = styled.div`
  flex-direction: column;
  padding-block-start: var(--container-padding-sm);
  padding-block-end: var(--container-padding-lg);
`;

export const Title = styled.h2`
  margin-block-end: ${pxToRem(16)};
`;

export const JournalMeta = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block-end: ${pxToRem(16)};
  border-bottom: 1px solid var(--color-base-neutral70);
`;

export const Number = styled.span`
  color: var(--color-base-neutral80);
`;

export const IssueWrapper = styled.div`
  width: 100%;
  flex-wrap: nowrap;
  padding-block-start: ${pxToRem(46)};

  & > * {
    flex-grow: 1;
  }
`;

export const IssueMeta = styled.div`
  flex-direction: column;
  max-width: ${pxToRem(596)};
  margin-inline-start: ${pxToRem(42)};
`;

export const Issue = styled.h3`
  margin-block-end: ${pxToRem(16)};
`;

export const Volume = styled.span`
  color: var(--color-base-neutral70);
  padding-inline-start: ${pxToRem(24)};
`;

export const Description = styled.div`
  margin-block-end: ${pxToRem(24)};
`;

export const DOI = styled.div`
  margin-block-start: ${pxToRem(8)};
`;
