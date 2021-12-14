import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLineClamp, respond } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;

  ${respond(`flex-direction: column-reverse;`, 70)}
`;

export const Text = styled.div`
  flex: 1 1 auto;

  > * + * {
    margin-block-start: ${pxToRem(12)};
  }
`;

export const Thumbnail = styled.div`
  flex: 0;
  padding-inline-start: var(--padding-lg);

  ${respond(
    `
    padding-inline-start: 0;
    padding-block-end: var(--padding-md);
  `,
    70
  )}
`;

export const Headers = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(4)};
  }
`;

export const Summary = styled.div`
  ${tLineClamp(3)}
`;

export const Metadata = styled.div`
  > * + * {
    margin-block-start: ${pxToRem(2)};
  }
`;
