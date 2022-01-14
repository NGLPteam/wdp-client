import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Inner = styled.div`
  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${respond(
    `
    justify-content: center;
    padding-block-start: ${pxToRem(80)};
    padding-block-end: ${pxToRem(80)};

    > * + * {
      margin-inline-start: var(--grid-column-gap-lg);
    }
    `,
    70
  )}
`;

export const Outer = styled.section`
  .a-bg-custom10 + & {
    > ${Inner} {
      border-top: 1px solid var(--color-base-neutral70);
    }
  }
`;
