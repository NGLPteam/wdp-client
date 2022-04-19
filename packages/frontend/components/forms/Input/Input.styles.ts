import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { aFocusReset } from "theme/mixins/appearance";

export const Wrapper = styled.div<{ $block?: true }>`
  position: relative;
  ${({ $block }) => $block && "display: flex;"}
`;

export const Input = styled.input`
  ${aInputReset}
  ${aFocusReset}
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-xs);
  width: 100%;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-block-start: 8px;
  padding-block-end: 8px;
  background: var(--color-base-neutral00);
`;
