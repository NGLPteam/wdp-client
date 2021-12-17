import { pxToRem } from "@wdp/lib/theme/functions";
import { aHidden, aInputReset } from "@wdp/lib/theme/mixins";
import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  gap: var(--grid-gap-sm);
  align-items: stretch;
  padding-block-start: 0;
  padding-block-end: 0;
  height: ${pxToRem(32)};
`;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  ${aInputReset}
  flex: 1 1 auto;

  ::placeholder {
    text-overflow: ellipsis;
  }

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  margin-block-start: 1px;

  &:focus {
    outline: none;
  }

  /* Only show the submit button if the user is using keyboard navigation */
  /* Without this, there's no indication of what's in focus */
  &:not(:focus) {
    ${aHidden}
  }
`;
