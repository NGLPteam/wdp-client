import styled from "styled-components";
import { globalNavRespond, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import { aHidden } from "theme/mixins/appearance";

export const Toggle = styled.button`
  display: flex;
  align-items: center;
  transition: var(--color-transition);

  ${globalNavRespond(`display: none`, "min")}

  &:hover {
    color: var(--accent-color);
  }

  > * + * {
    margin-inline-start: ${pxToRem(10)};
  }
`;

export const Label = styled.label`
  ${respond(aHidden, 20)}
`;
