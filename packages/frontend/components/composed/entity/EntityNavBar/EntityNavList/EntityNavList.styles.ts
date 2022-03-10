import styled from "styled-components";
import { respond } from "theme/mixins";

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-inline-start: calc(var(--padding-lg) * -1);
  margin-block-end: calc(var(--padding-sm) * -1);

  ${respond(`flex-direction: column;`, 50)}

  > * {
    margin-inline-start: var(--padding-lg);
    margin-block-end: var(--padding-sm);
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }
`;
