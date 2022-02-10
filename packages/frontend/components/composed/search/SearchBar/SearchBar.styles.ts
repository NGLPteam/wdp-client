import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { borderRadius } from "theme/base/variables";
import { aButtonBase } from "theme/mixins";

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: ${pxToRem(52)};
  margin-block-end: var(--padding-lg);
  background: var(--color-custom10);
  border-radius: ${borderRadius.sm};
`;

export const Input = styled.input`
  ${aInputReset}
  flex: 1 1 auto;
  appearance: none;
  width: 100%;
  border: none;
  background: transparent;
  padding-inline-end: var(--padding-sm);

  &:focus {
    outline: none;
  }

  &:autofill {
    background: transparent;
  }
`;

export const Label = styled.label`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(56)};
`;

export const Button = styled.button`
  ${aButtonBase("secondary")}
  flex: 0 0 auto;
  justify-content: center;
  background: var(--color-custom20);
  border-top-right-radius: ${borderRadius.sm};
  border-bottom-right-radius: ${borderRadius.sm};
  width: ${pxToRem(56)};
`;
