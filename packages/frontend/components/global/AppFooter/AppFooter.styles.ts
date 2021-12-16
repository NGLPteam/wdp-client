import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond } from "theme/mixins";

export const FooterWrapper = styled.footer`
  padding-block-start: var(--container-padding-xlg);
  padding-block-end: var(--container-padding-sm);
`;

export const FooterInner = styled.div`
  ${lGrid({
    rowGap: "var(--padding-xl)",
  })}

  grid-template-areas:
    "community community community community community . . . search search search search"
    "about about about about about . . . nav nav nav nav"
    "copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright";

  ${respond(
    `
    grid-template-areas:
    "community community community community community community . search search search search search"
    "about about about about about about . nav nav nav nav nav"
    "copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright copyright";
    `,
    120
  )}

  ${respond(
    `
    grid-template-columns: 1fr;
    grid-template-areas:
      "community"
      "search"
      "nav"
      "about"
      "copyright";
    row-gap: ${pxToRem(60)};
  `,
    70
  )}
`;

export const CommunityNameWrapper = styled.div`
  grid-area: community;
`;

export const SearchWrapper = styled.div`
  grid-area: search;
`;

export const AboutWrapper = styled.div`
  grid-area: about;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavWrapper = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-column-gap);
`;

export const NavListItem = styled.li`
  margin-top: 8px;
`;

export const CopyrightText = styled.p`
  grid-area: copyright;
  padding-block-start: ${95 - 40}px;
`;
