import { pxToRem } from "@wdp/lib/theme/functions";
import { aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { borderRadius } from "theme/base/variables";

export const Form = styled.form`
  padding-block: ${pxToRem(36)};
  padding-inline: ${pxToRem(48)};
  max-width: ${pxToRem(768)};
  width: calc(100vw - var(--padding-sm) * 2);
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: ${pxToRem(52)};
  margin-block-end: var(--padding-lg);
  background: var(--color-custom10);
  border-radius: ${borderRadius.sm};
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  ${aInputReset}
  appearance: none;
  width: 100%;
  border: none;
  background: transparent;
  padding-inline-end: var(--padding-sm);
`;

export const SearchIconLabel = styled.label`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(56)};
`;

export const SearchButton = styled.button`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-custom20);
  border-top-right-radius: ${borderRadius.sm};
  border-bottom-right-radius: ${borderRadius.sm};
  width: ${pxToRem(56)};
`;

export const SelectLabel = styled.label`
  padding-block-end: ${pxToRem(4)};
`;
