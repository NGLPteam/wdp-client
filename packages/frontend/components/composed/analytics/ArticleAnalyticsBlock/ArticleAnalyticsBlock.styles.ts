import styled from "styled-components";
import { respond } from "theme/mixins";

export const Block = styled.div`
  padding: var(--container-padding-md);
  display: grid;
  grid-template-columns: 200px repeat(3, 1fr);
  grid-template-rows: auto minmax(400px, 1fr);
  grid-template-areas:
    "controls controls controls controls"
    "stats chart chart chart";
  gap: 45px;
  background-color: var(--color-custom10);
  margin-block: var(--container-padding-md);
  border-radius: 12px;
  overflow: hidden;
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
    100,
  )}

  ${respond(`padding-inline: var(--container-padding-sm)`, 50)}

  ${respond(`padding-inline: var(--container-padding-xs)`, 30)}
`;

export const LoaderWrapper = styled.div`
  grid-area: chart;
  display: flex;
  justify-content: center;
  align-items: center;
`;
