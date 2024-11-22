import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aButton, respond } from "theme/mixins";
import Button from "../..";

export const FixedWidthButton = styled(Button)`
  --shadow-color: var(--color-custom80);

  .a-bg-neutral90 & {
    --shadow-color: var(--color-base-neutral00);
  }

  ${aButton("primary", "lg")}
  min-width: ${pxToRem(181)};
  justify-content: center;
  overflow: hidden;
  align-items: center;

  > svg {
    margin-block-start: 2px;
  }

  > span {
    flex-grow: 0;
  }

  &[aria-disabled="true"] {
    opacity: 0.5;
    pointer-events: none;

    &:focus-visible {
      opacity: 1;
      box-shadow: 0px 0px 0px 1px var(--shadow-color);
    }
  }

  ${respond(`width: ${pxToRem(140)};`, 70)}

  a:focus-visible & {
    background: var(--button-primary-bg-hover-color);
    color: var(--button-primary-text-hover-color);
    box-shadow: 0px 0px 0px 1px var(--shadow-color);
  }
`;
