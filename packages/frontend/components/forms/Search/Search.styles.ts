import { pxToRem } from "@wdp/lib/theme/functions";
import { aHidden, aInputReset, tTruncate } from "@wdp/lib/theme/mixins";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: stretch;
  height: ${pxToRem(32)};
  width: 100%;
`;

export const SearchLabel = styled.label`
  margin-inline-end: ${pxToRem(12)};
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  ${aInputReset}
  ${tTruncate}
  flex: 1 1 auto;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;

  &:focus {
    outline: none;
  }

  /* Only show the submit button if the user is using keyboard navigation */
  /* Without this, there's no indication of what's in focus */
  &:not(:focus) {
    ${aHidden}
  }
`;
