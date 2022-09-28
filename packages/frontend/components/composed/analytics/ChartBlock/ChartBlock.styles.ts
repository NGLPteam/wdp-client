import styled from "styled-components";

export const ChartWrapper = styled.div<{ $type: string }>`
  grid-area: chart;
  overflow-x: auto;
  overflow-y: hidden;
  margin-inline: calc(var(--AnalyticsBlock-inline-padding) * -1);

  > div {
    margin-inline: auto;
  }

  ${({ $type }) => $type !== "map" && `scale: 115%;`}
`;
