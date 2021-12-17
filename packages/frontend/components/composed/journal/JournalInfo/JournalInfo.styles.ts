import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

const TABLET_BREAK = 100;
const MOBILE_BREAK = 70;

export const SectionInner = styled.div`
  padding-block-start: ${pxToRem(80)};
  padding-block-end: ${pxToRem(80)};

  ${lGrid()}

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  `,
    MOBILE_BREAK
  )}

  ${respond(
    `
    grid-row-gap: var(--container-padding-lg);
    grid-column-gap: var(--container-padding-sm);
  `,
    TABLET_BREAK
  )}
`;

export const InfoBlock = styled.div`
  grid-column: span 7;

  ${respond(
    `
    grid-column: 1;
    grid-row: 1;
  `,
    MOBILE_BREAK
  )}
`;

export const AnnouncementsBlock = styled.div`
  grid-column: 9 / span 4;
  border-radius: var(--border-radius-md);
  padding-block-start: ${pxToRem(44)};
  padding-inline-start: ${pxToRem(52)};
  padding-inline-end: ${pxToRem(52)};
  padding-block-end: ${pxToRem(52)};

  ${respond(
    `
    grid-column: 8 / span 5;
  `,
    TABLET_BREAK
  )}

  ${respond(
    `
    grid-column: 1;
    grid-row: 2;
  `,
    MOBILE_BREAK
  )}
`;

export const AnnouncementsHeader = styled.h4`
  padding-block-end: ${pxToRem(12)};
  border-bottom: 1px solid var(--border-color);
`;

export const AnnouncementItem = styled.li`
  padding-block-start: var(--padding-md);
  padding-block-end: var(--padding-md);
  border-bottom: 1px solid var(--border-color);
`;

export const AnnouncementBody = styled.div`
  padding-block-start: var(--padding-xs);
  padding-block-end: ${pxToRem(12)};
`;
