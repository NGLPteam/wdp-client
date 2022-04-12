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
  border: 1px solid blue;
  width: 100%;
`;
