import styled from "styled-components";
import { respond } from "theme/mixins";

export const BlockGroup = styled.div`
  grid-area: stats;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-block-start: 20px;
  padding-inline-start: var(--AnalyticsBlock-inline-padding);

  ${respond(
    `flex-direction: row; padding-inline-end: var(--AnalyticsBlock-inline-padding);
`,
    100
  )}

  ${respond(`flex-direction: column;`, 70)}
`;
