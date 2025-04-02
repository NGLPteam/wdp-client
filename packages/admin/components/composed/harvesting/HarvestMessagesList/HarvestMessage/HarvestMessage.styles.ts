import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import { respond } from "theme/mixins/base";

export const Grid = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 4fr;
  grid-template-rows: auto;
  border-top: 1px solid var(--color-lighter);
  padding-block: 1rem;
  border-color: var(--color-light);

  ${respond(`grid-template-columns: 1fr; gap: 1rem;`, 80)}
`;

export const Level = styled.div`
  padding: 0.25rem 0.5rem;
  width: max-content;
  border-radius: ${pxToRem(4)};
  ${tLabel("md")}
  align-self: start;
`;

export const Fatal = styled(Level)`
  color: var(--neutral00);
  background: var(--reddark);
`;

export const Error = styled(Level)`
  color: var(--neutral00);
  background: var(--reddark);
`;

export const Warn = styled(Level)`
  background: var(--yellowdark);
`;

export const Info = styled(Level)`
  color: var(--neutral00);
  background: var(--greendark);
`;

export const Tag = styled.span`
  color: var(--brand100);
  padding: 0.15rem 0.35rem;
  background: var(--brand10);
  width: max-content;
  border-radius: ${pxToRem(4)};
  ${tLabel("sm")}
`;

export const Body = styled.div`
  > * + * {
    margin-block-start: 1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: ${pxToRem(30)};
  color: var(--brand100);
  font-weight: var(--font-weight-medium);
`;

export const Tags = styled.div`
  display: flex;
  gap: ${pxToRem(12)};
`;
