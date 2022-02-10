import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { tCopySmall } from "theme/mixins";
import { aFocusReset } from "theme/mixins/appearance";

export const Wrapper = styled.div<{ $block?: true; $size?: "lg" }>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-xs);
`;

export const Typeahead = styled.select`
  ${aInputReset}
  ${aFocusReset}
  ${tCopySmall}
  padding-block-start: var(--padding-sm);
  padding-block-end: var(--padding-sm);
  padding-inline-start: var(--padding-rg);
  padding-inline-end: var(--padding-md);
  min-height: ${pxToRem(40)};
  width: 100%;
`;

export const Icon = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  right: 16px;
  height: 100%;
`;
