import styled from "styled-components";
import { globalNavRespond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";

export const Toggle = styled.button`
  display: flex;
  align-items: center;
  transition: var(--color-transition);

  ${globalNavRespond(`display: none`, "min")}

  &:hover {
    color: var(--accent-color);
  }

  > * + * {
    margin-inline-start: ${pxToRem("10px")};
  }
`;
