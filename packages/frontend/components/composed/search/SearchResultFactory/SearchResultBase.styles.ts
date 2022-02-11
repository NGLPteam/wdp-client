import styled from "styled-components";
import { tLineClamp } from "@wdp/lib/theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;

  ${respond(
    `
    flex-direction: column-reverse;
  `,
    50
  )}
`;

export const Text = styled.div`
  flex: 1 1 auto;
`;

export const Image = styled.div`
  position: relative;
  flex: 0 0 auto;
  margin-block-start: var(--padding-xxs);
  margin-inline-start: ${pxToRem(20)};
  max-width: 100px;

  ${respond(
    `
    margin-inline-start: 0;
    margin-block-end: ${pxToRem(20)};
  `,
    50
  )}
`;

export const Type = styled.div`
  margin-block-end: ${pxToRem(12)};
`;

export const Description = styled.div`
  margin-block-start: var(--padding-sm);
  ${tLineClamp(2)}
`;

export const Metadata = styled.div`
  &:not(:empty) {
    margin-block-start: ${pxToRem(12)};
  }

  > * + * {
    margin-block-start: var(--padding-xxs);
  }
`;
