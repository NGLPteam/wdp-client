import styled from "styled-components";

export const ChartWrapper = styled.div<{ $type: string }>`
  grid-area: chart;

  ${({ $type }) => $type !== "map" && `scale: 115%;`}
`;
