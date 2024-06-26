import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { lGrid, respond, globalNavRespond } from "theme/mixins";

export const FooterWrapper = styled.footer`
  padding-block-start: var(--container-padding-xxl);
  padding-block-end: var(--container-padding-sm);

  @media print {
    padding-block-start: var(--container-padding-sm);
  }
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
    120,
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
    70,
  )}

  @media print {
    grid-template-columns: 1fr;
    grid-template-areas:
      "community"
      "about"
      "copyright";
    row-gap: var(--padding-lg);
  }
`;

export const CommunityNameWrapper = styled.div`
  grid-area: community;
`;

export const SearchWrapper = styled.div`
  grid-area: search;

  ${globalNavRespond(`display: none;`)}

  @media print {
    display: none;
  }
`;

export const SearchMobile = styled.div`
  --button-secondary-bg-color: var(--color-base-neutral00);
  grid-area: search;

  ${globalNavRespond(`display: none;`, "min")}

  @media print {
    display: none;
  }
`;

export const AboutWrapper = styled.div`
  grid-area: about;
  display: grid;
  grid-auto-flow: row;
  row-gap: ${pxToRem(30)};
`;

export const NavWrapper = styled.nav`
  grid-area: nav;

  @media print {
    display: none;
  }
`;

export const NavList = styled.ul`
  columns: 2;
  margin-top: 8px;

  ${globalNavRespond(`columns: 1;`)}
`;

export const NavListItem = styled.li`
  & + & {
    margin-top: 8px;
  }

  /*
    Needed for the DialogDisclosures for placeholder routes.
    Can be removed once all routes are links.
  */
  button {
    text-align: left;
  }
`;

export const CopyrightText = styled.p`
  grid-area: copyright;

  @media screen {
    padding-block-start: ${95 - 40}px;
  }
`;

export const Installation = styled.h4`
  div[data-community-name-portal]:has(a) + & {
    display: none;
  }
`;

export const InstallationDesktop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--grid-column-gap);
`;

export const InstallationDesktopName = styled.div`
  ${FooterInner}:has(div[data-community-name-portal] > h4) & {
    display: block;
    ${globalNavRespond(`
      display: none;
    `)}
  }

  display: none;
`;

export const InstallationMobile = styled.div`
  ${FooterInner}:has(div[data-community-name-portal] > h4) & {
    display: block;
    ${globalNavRespond(`display: none;`, "min")}
  }

  display: none;
`;
