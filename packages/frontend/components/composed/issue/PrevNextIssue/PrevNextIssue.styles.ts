import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { Button } from "components/atomic";
import { aButton } from "theme/mixins/appearance";

export const Inner = styled.div`
  padding-block: var(--container-padding-lg);
`;

export const Outer = styled.section`
  .a-bg-custom10 + & {
    > ${Inner} {
      border-top: 1px solid var(--color-base-neutral70);
    }
  }
`;

export const FixedWidthButton = styled(Button)`
  ${aButton("primary", "lg")}
  width: ${pxToRem(180)};
  justify-content: center;

  & > svg {
    flex-grow: 0;
  }
`;
