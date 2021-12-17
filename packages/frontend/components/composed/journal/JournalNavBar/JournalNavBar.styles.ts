import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Nav = styled.div`
  padding-block-start: ${pxToRem(36)};
  padding-block-end: ${pxToRem(36)};
  min-height: ${pxToRem(104)};
`;

export const NavInner = styled.div`
  --button-secondary-bg-color: var(--color-custom10);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${respond(
    `
    flex-direction: column;

    > * + * {
      margin-block-start: var(--padding-lg);
    }
  `,
    70
  )}
`;

export const LeftSide = styled.div`
  flex: 1 1 auto;
`;

export const RightSide = styled.div`
  flex: 1 1 auto;
  max-width: ${pxToRem(376)};
`;
