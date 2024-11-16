import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aButton, respond } from "theme/mixins";
import Button from "../..";

export const FixedWidthButton = styled(Button)`
  ${aButton("primary", "lg")}
  width: ${pxToRem(181)};
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
    opacity: 0.7;
    pointer-events: none;
  }

  ${respond(`width: ${pxToRem(140)};`, 70)}
`;
