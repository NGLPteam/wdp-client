import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Inner = styled.div`
  --button-secondary-bg-color: var(--color-custom20);

  padding-block-start: var(--container-padding-lg);
  padding-block-end: var(--container-padding-lg);

  ${respond(
    `
    padding-block-start: ${pxToRem(80)};
    padding-block-end: ${pxToRem(80)};
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

export const TextBlock = styled.div`
  padding-block-end: ${pxToRem(20)};

  & > * + * {
    padding-block-start: var(--padding-xs);
  }
`;
