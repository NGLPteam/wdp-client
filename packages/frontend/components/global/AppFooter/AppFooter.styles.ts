import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding-block-start: var(--container-padding-xlg);
  padding-block-end: var(--container-padding-sm);
  --grid-row-gap: 40px;
`;

export const FooterInner = styled.footer``;

export const CommunityName = styled.div`
  grid-column: 1 / span 5;
  grid-row: 1;
`;

export const SearchWrapper = styled.div`
  grid-column: 9 / span 4;
  grid-row: 1;
`;

export const AboutText = styled.p`
  grid-column: 1 / span 5;
  grid-row: 2;
`;

export const NavWrapper = styled.nav`
  grid-column: 9 / span 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--grid-column-gap);
  grid-row: 2;
`;

export const NavListItem = styled.li`
  margin-top: 8px;
`;

export const CopyrightText = styled.p`
  grid-column: 1 / span 12;
  padding-block-start: ${95 - 40}px;
`;
