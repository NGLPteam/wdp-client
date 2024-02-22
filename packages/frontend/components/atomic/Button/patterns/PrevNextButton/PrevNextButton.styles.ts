import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import Button from "../..";
import { aButton, respond } from "theme/mixins";

export const FixedWidthButton = styled(Button)`
  ${aButton("primary", "lg")}
  width: ${pxToRem(181)};
  justify-content: center;
  overflow: hidden;

  & > svg {
    flex-grow: 0;
  }

  ${respond(`width: ${pxToRem(140)};`, 70)}
`;
