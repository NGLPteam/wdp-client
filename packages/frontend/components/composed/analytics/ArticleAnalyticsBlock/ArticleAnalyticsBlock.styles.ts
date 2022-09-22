import styled from "styled-components";
import { respond } from "theme/mixins";

export const Block = styled.div`
  padding: var(--container-padding-md);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "controls controls controls controls"
    "stats chart chart chart";
  gap: 45px;
  background-color: var(--color-custom10);
  margin-block: var(--container-padding-md);
  border-radius: 12px;
  overflow-x: hidden;
  max-width: 100%;

  ${respond(
    `
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-template-areas:
      "controls"
      "chart"
      "stats";
    gap: 30px;
    `,
    100
  )}
`;

export const CountBlock = styled.div<{ $order: number }>`
  grid-area: ${({ $order }) => `count${$order}`};
  background-color: var(--color-base-neutral10);
  border-radius: 8px;
`;

export const Controls = styled.div`
  grid-area: controls;
`;

export const LoaderWrapper = styled.div`
  grid-area: chart;
  display: flex;
  justify-content: center;
  align-items: center;
`;
