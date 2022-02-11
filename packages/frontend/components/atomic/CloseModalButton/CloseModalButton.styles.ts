import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond } from "theme/mixins";

export const Toggle = styled.button`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  display: block;
  margin-inline-end: ${pxToRem(12)};

  ${respond(aHidden, 30)}
`;
