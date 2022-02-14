import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aHidden } from "@wdp/lib/theme/mixins";
import { spin } from "theme/base/animations";

const SIZE = pxToRem(60);

export const Icon = styled.div`
  height: ${SIZE};
  width: ${SIZE};
  border-radius: 50%;
  border: 4px solid;
  border-color: var(--color-base-neutral70, #76767a);
  border-top-color: var(--color-base-neutral30, #d0d0d6);
  animation: ${spin} 1s infinite cubic-bezier(0.37, 0, 0.63, 1);
`;

export const Label = styled.span`
  ${aHidden}
`;
