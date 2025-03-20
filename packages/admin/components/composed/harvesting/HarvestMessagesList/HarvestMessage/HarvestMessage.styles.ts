import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Grid = styled.li`
  display: grid;
  grid-template-columns: 0.5fr 1fr 4fr;
  grid-template-rows: auto;
  border-top: 1px solid var(--color-lighter);
  padding-block: 1rem;
  border-color: var(--color-light);
`;

export const Date = styled.div``;

export const Level = styled.div`
  padding: 0.25rem 0.5rem;
  color: var(--neutral00);
  background: var(--reddark);
  width: max-content;
  border-radius: ${pxToRem(4)};
  ${tLabel("md")}
  align-self: start;
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
