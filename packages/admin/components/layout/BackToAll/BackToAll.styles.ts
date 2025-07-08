import styled from "styled-components";

export const NavWrapper = styled.nav`
  padding-block-start: 24px;
  display: flex;
  align-items: center;
`;

export const LinkWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);

  > * + * {
    margin-inline-start: 5px;
  }

  & + & {
    margin-inline-start: 5px;
  }
`;
