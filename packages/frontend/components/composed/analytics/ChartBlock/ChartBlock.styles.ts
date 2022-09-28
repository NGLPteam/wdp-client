import styled from "styled-components";

export const ChartWrapper = styled.div<{ $type: string }>`
  grid-area: chart;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  > div {
    margin-inline: auto;
  }

  ${({ $type }) => $type !== "map" && `scale: 115%;`}
`;
