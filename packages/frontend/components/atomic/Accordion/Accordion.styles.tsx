import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { tLabel, tCopySmall, aFocusReset } from "theme/mixins";
import { IconFactory } from "components/factories";
import { transition } from "theme/base/variables";

export const Accordion = styled.details``;

export const Summary = styled.summary`
  ${tLabel("lg")}
  display: flex;
  align-items: center;
  list-style: none;
  ${aFocusReset}

  > * + * {
    margin-inline-start: ${pxToRem(10)};
  }

  > span {
    border-bottom: 2px solid transparent;
    transition: ${transition.border};
  }

  &:hover,
  &[data-focus-visible-added] {
    color: var(--color-light);

    > span {
      border-bottom-color: var(--color-lighter);
    }
  }
`;

export const Arrow = styled(IconFactory)``;

export const List = styled.ul`
  padding-inline-start: ${pxToRem(20)};
  padding-block-start: var(--padding-rg);
`;

export const Item = styled.li`
  white-space: nowrap;
  ${tCopySmall}

  & + & {
    margin-block-start: var(--padding-rg);
  }
`;
