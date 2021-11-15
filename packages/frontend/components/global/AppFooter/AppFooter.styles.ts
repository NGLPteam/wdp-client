import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding-block-start: var(--container-padding-xlg);
  padding-block-end: var(--container-padding-sm);
`;

export const FooterInner = styled.div`
  display: grid;
  grid-template:
    "community . search" auto
    "about . nav" auto
    "copyright copyright copyright" auto
    / minmax(auto, 473px) 1fr minmax(auto, 376px);
  gap: 40px var(--grid-column-gap);
`;

export const CommunityNameWrapper = styled.div`
  grid-area: community;
`;

export const SearchWrapper = styled.div`
  grid-area: search;
`;

export const AboutText = styled.p`
  grid-area: about;
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
