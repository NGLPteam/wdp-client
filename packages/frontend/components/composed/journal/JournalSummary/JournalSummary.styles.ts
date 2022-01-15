import { pxToRem } from "@wdp/lib/theme/functions";
import styled from "styled-components";
import { aFocus, respond, tLineClamp } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;
  ${respond(`flex-wrap: wrap;`, 50)}

  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const ItemCoverLink = styled.a`
  margin-inline-end: var(--padding-lg);
  flex: 0 0 120px;

  ${respond(`margin-block-end: var(--padding-lg);`, 50)}

  ${aFocus()}
`;

export const TextBlock = styled.div`
  flex: 1 1 100%;
`;

export const Headers = styled.div`
  padding-block-end: ${pxToRem(12)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const Summary = styled.p`
  padding-block-start: var(--padding-sm);
  ${tLineClamp(2)}
`;

export const Metadata = styled.div``;
