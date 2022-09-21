import styled from "styled-components";

export const Block = styled.div`
  padding-block: var(--container-padding-md);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px 150px 150px 150px;
  grid-template-areas:
    "controls controls controls controls"
    "chart chart chart stats"
    "chart chart chart stats"
    "chart chart chart stats";
  gap: 30px;
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
