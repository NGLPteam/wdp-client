import React from "react";
import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import { aBgLight } from "theme/mixins/appearance";
import { encodedIconClose } from "components/svgs/icons/Close";

import BaseSearchInput from "./BaseSearchInput";
import { noInsetSupport } from "theme/mixins/base";
type Props = React.ComponentProps<typeof BaseSearchInput>;

export const SearchInput = styled(BaseSearchInput)<Props>`
  --search-top-padding: ${pxToRem(7)};
  --search-left-padding: ${pxToRem(12)};
  position: relative;

  &:focus-within,
  &:hover {
    ${aBgLight("brand10")}
    background-color: transparent;
  }

  &__input {
    width: 100%;
    background-color: var(--background-light);
    border-radius: var(--border-radius-xlg);
    border: none;
    padding: var(--search-top-padding) var(--search-left-padding)
      var(--search-top-padding) ${pxToRem(36)};
    transition: background var(--base-duration) var(--base-timing);
    color: var(--color-dark);

    &::placeholder {
      color: var(--color-lighter);
      ${tLabel("md")}
    }

    &::-webkit-search-cancel-button {
      position: relative;
      inset-inline-end: 0;

      ${noInsetSupport(`
        right: 0;
      `)}

      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: url(${encodedIconClose({ fill: "#D1E7F0" })}) center no-repeat;
    }
  }

  &:focus-within &__input,
  &:hover &__input {
    &::placeholder {
      color: var(--brand90);
    }

    &::-webkit-search-cancel-button {
      cursor: pointer;
      background-image: url(${encodedIconClose({ fill: "#000" })});
    }
  }

  &__icon {
    position: absolute;
    transform: translateY(-50%);
    inset-block-start: 50%;
    inset-inline-start: var(--search-left-padding);

    ${noInsetSupport(`
      top: 50%;
      left: var(--search-left-padding);
    `)}
  }
`;
