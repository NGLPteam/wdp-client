import styled from "styled-components";
import { aHidden } from "@wdp/lib/theme/mixins";
import { pxToRem } from "@wdp/lib/theme/functions";
import { respond, globalNavRespond } from "theme/mixins";
import { transition } from "theme/base/variables";

export const Toggle = styled.button`
  display: flex;
  align-items: center;

  ${globalNavRespond(`display: none`, "min")}

  > span {
    border-bottom: 2px solid transparent;
    transition: ${transition.border};
  }

  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }

  &:hover,
  &[data-focus-visible-added] {
    > span {
      border-bottom-color: var(--color-lighter);
    }
  }
`;

export const Label = styled.span`
  ${respond(aHidden, 30)}
`;
