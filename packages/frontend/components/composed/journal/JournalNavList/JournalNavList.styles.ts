import styled from "styled-components";

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-lg);
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }
`;
