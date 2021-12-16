import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
import { respond } from "@wdp/lib/theme/functions";

export const Toggle = styled.button`
  display: flex;
  align-items: center;

  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }
`;

export const Label = styled.label`
  ${respond(aHidden, 30)}
`;
