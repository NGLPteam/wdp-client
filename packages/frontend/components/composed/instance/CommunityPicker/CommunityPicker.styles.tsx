import styled from "styled-components";
import { aFocusBase } from "theme/mixins";
import Button from "@/components/atomic/Button";

export const Label = styled.span`
  display: inline;

  span[data-active="true"] + & {
    display: none;
  }
`;

export const Disclosure = styled(Button)`
  svg {
    margin-block-start: 2px;
  }

  button:focus-visible & {
    background: var(--button-secondary-bg-focus-color);
    ${aFocusBase};
  }
`;
