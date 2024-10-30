import styled from "styled-components";
import { lGrid, respond } from "theme/mixins";

const TABLET_BREAK = 100;
const MOBILE_BREAK = 100;

export const Grid = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${lGrid()}

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  `,
    MOBILE_BREAK,
  )}

  ${respond(
    `
    grid-row-gap: var(--container-padding-md);
    grid-column-gap: var(--container-padding-sm);
  `,
    TABLET_BREAK,
  )}
`;

export const Content = styled.div`
  grid-column: span 7;

  ${respond(
    `
    grid-column: 1;
    grid-row: 1;
  `,
    MOBILE_BREAK,
  )}
`;

export const Announcements = styled.div`
  grid-column: 9 / span 4;

  ${respond(
    `
    grid-column: 8 / span 5;
  `,
    TABLET_BREAK,
  )}

  ${respond(
    `
    grid-column: 1;
    grid-row: 2;
  `,
    MOBILE_BREAK,
  )}
`;
