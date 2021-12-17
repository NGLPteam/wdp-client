import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { respond } from "theme/mixins";

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${respond(`flex-direction: column;`, 50)}

  > * + * {
    margin-inline-start: var(--padding-lg);

    ${respond(
      `
      margin-inline-start: 0;
      margin-block-start: ${pxToRem(20)};
    `,
      50
    )}
  }
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: var(--padding-sm);
  }
`;
