import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aHidden, aInputReset } from "@wdp/lib/theme/mixins";
import { aFocusReset, tHeading } from "theme/mixins";
import { transition } from "theme/base/variables";

export const Form = styled.form`
  padding-block-start: ${pxToRem(73)};
  padding-block-end: var(--container-padding-xl);

  @media print {
    display: none;
  }

  .a-bg-custom10 + .a-bg-custom10 & {
    padding-block-start: 0;
    padding-block-end: var(--container-padding-sm);
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: ${pxToRem(64)};
  width: 100%;
`;

export const SearchIconLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(64)};
  border-bottom: 3px solid var(--color-base-neutral90);
`;

export const SearchInput = styled.input`
  ${aInputReset}
  ${tHeading(4)}
  flex: 1 1 auto;
  padding-block-start: ${pxToRem(17)};
  padding-block-end: ${pxToRem(20)};
  padding-inline-start: ${pxToRem(12)};
  padding-inline-end: ${pxToRem(12)};
  border-bottom: 3px solid var(--color-base-neutral20);
  transition: ${transition.border};

  &::-webkit-search-cancel-button {
    width: ${pxToRem(32)};
    height: ${pxToRem(32)};
    margin-block-start: ${pxToRem(2)};
  }

  ${aFocusReset}

  &:focus-visible {
    border-bottom: 3px solid var(--color-base-neutral60);
  }
`;

export const SearchButton = styled.button`
  border-bottom: 3px solid var(--color-base-neutral20);
  ${aHidden}

  &:focus {
    outline: none;
  }
`;
