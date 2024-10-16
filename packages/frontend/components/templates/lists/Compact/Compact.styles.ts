import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";

export const Item = styled.li`
  & + & {
    margin-block-start: ${pxToRem(20)};
  }

  &::before {
    flex-shrink: 0;
    margin-inline-end: ${pxToRem(14)};
  }

  > * + * {
    margin-inline-start: 0.75rem;
  }
`;

export const ContextOne = styled.span`
  color: var(--color-base-neutral70);
`;
