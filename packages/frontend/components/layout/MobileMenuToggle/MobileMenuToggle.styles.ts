import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond, globalNavRespond } from "theme/mixins";

export const Toggle = styled.button`
  display: flex;
  align-items: center;

  ${globalNavRespond(`display: none`, "min")}

  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }
`;

export const Label = styled.label`
  ${respond(aHidden, 30)}
`;
