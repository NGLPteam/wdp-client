import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { aButton, aFocusReset } from "theme/mixins/appearance";

export const SelectWrapper = styled.div`
  position: relative;
  ${aButton("secondary", "sm")}
`;

export const Select = styled.select`
  ${aInputReset}
  ${aFocusReset}
  padding-inline-end: ${pxToRem(18)};
  width: 100%;
`;

export const SelectIcon = styled.span`
  position: absolute;
  display: inline;
  pointer-events: none;
  right: 12px;
  top: 6px;
`;
