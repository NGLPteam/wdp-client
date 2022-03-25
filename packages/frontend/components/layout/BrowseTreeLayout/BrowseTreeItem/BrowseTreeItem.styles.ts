import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aFocusReset, fluidScale } from "theme/mixins";
import { IconFactory } from "components/factories";

export const Details = styled.details`
  position: relative;

  & + & {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const Summary = styled.summary`
  list-style: none;
  ${aFocusReset}

  &:hover,
  &[data-focus-visible-added] {
    color: var(--color-light);
  }

  [aria-disabled] {
    pointer-events: none;
  }
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

export const Item = styled.li`
  margin-inline-start: ${fluidScale("50px", "25px")};
  margin-block-start: ${pxToRem(20)};
`;
