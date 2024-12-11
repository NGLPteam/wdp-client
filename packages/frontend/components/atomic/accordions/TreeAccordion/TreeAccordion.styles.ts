import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aFocusReset, fluidScale } from "theme/mixins";
import IconFactory from "@/components/factories/IconFactory";

export const Details = styled.details``;

export const Summary = styled.summary`
  position: relative;
  list-style: none;
  cursor: pointer;
  ${aFocusReset}
`;

export const Toggle = styled(IconFactory)`
  position: absolute;
  left: calc(${fluidScale("28px", "22px")} * -1);
  top: ${pxToRem(6)};
  border-radius: 100%;

  [aria-disabled] & {
    display: none;
  }

  [data-focus-visible-added] & {
    outline: 1px solid var(--border-color);
    outline-offset: 5px;
  }
`;
