import { pxToRem } from "@wdp/lib/theme/functions";
import { tTruncate } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { respond } from "theme/mixins";

export const Delimiter = styled.span`
  display: inline-block;
  padding-inline-start: ${pxToRem(10)};
  padding-inline-end: ${pxToRem(10)};
`;

export const ItemText = styled.span`
  display: inline-block;
  max-width: 350px;
  ${tTruncate}

  ${respond(`max-width: 70vw;`, 50)}
`;
