import styled from "styled-components";
import { respond } from "theme/mixins";

export const ChartWrapper = styled.div<{ $type: string }>`
  grid-area: chart;
  overflow-x: auto;
  overflow-y: hidden;

  > div {
    max-width: 794px;
    margin-inline: auto;
  }

  ${({ $type }) =>
    $type !== "map" &&
    `
    transform: translateX(30px) translateY(calc(var(--AnalyticsBlock-gap) * -1)); 
    transform-origin: center;
    
    

    ${respond(`transform: translateX(15px);`, 120)}
    
    `}

  ${respond(
    `margin-inline: calc(var(--AnalyticsBlock-inline-padding) * -1);`,
    100
  )}
`;
