import styled from "styled-components";

export const Nav = styled.nav`
  padding-block-start: var(--container-padding-xs);
  padding-block-end: var(--container-padding-xs);

  @media print {
    display: none;
  }
`;

export const NavInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
