import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const AnnouncementsBlock = styled.div`
  @media screen {
    border-radius: var(--border-radius-md);
    padding-block-start: ${pxToRem(44)};
    padding-inline-start: ${pxToRem(52)};
    padding-inline-end: ${pxToRem(52)};
    padding-block-end: ${pxToRem(52)};
    align-self: start;
  }
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
