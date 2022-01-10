import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLineClamp, respond, aFocus } from "theme/mixins";
import { ReadMoreLink as BaseReadMoreLink } from "components/atomic";

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

export const ThumbnailLink = styled.a`
  display: block;
  flex: 0;
  margin-inline-start: var(--padding-lg);

  ${aFocus()}

  ${respond(
    `
    margin-inline-start: 0;
    margin-block-end: var(--padding-md);
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
