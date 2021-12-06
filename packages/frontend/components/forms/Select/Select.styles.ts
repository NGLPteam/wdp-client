import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { aButton } from "theme/mixins/appearance";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const Select = styled.select`
  ${aInputReset}
  ${aButton("secondary", "sm")}
  padding-inline-end: 34px;
  width: 100%;
`;

export const SelectIcon = styled.span`
  position: absolute;
  display: inline;
  pointer-events: none;
  right: 12px;
  top: 6px;
`;
