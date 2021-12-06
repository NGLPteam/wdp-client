import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { tLineClamp, respond } from "theme/mixins";

export const ItemLinkWrapper = styled.a`
  display: flex;

  ${respond(`flex-direction: column-reverse;`, 70)}
`;

export const ItemText = styled.div`
  flex: 1 1 auto;

  > * + * {
    padding-block-start: ${pxToRem(12)};
  }
`;

export const ItemThumbnail = styled.div`
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

export const ItemHeader = styled.div`
  > * + * {
    padding-block-start: ${pxToRem(4)};
  }
`;

export const ItemSummary = styled.div`
  ${tLineClamp(3)}
`;

export const ItemMetadata = styled.div`
  > * + * {
    padding-block-start: ${pxToRem(2)};
  }
`;
