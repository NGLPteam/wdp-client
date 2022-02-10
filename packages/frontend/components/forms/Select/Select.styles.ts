import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { aButton, aFocusReset } from "theme/mixins/appearance";

export const Wrapper = styled.div<{ $block?: true; $size?: "lg" }>`
  position: relative;
  ${aButton("secondary", "sm")}

  ${({ $size }) => $size === "lg" && "min-height: 40px;"}

  ${({ $block }) => $block && "display: flex;"}
`;

export const Select = styled.select`
  ${aInputReset}
  ${aFocusReset}
  padding-inline-end: ${pxToRem(18)};
  width: 100%;
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  right: 12px;
  height: 100%;
`;
