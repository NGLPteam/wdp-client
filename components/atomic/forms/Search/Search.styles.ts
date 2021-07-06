import React from "react";
import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import { aBgLight } from "theme/mixins/appearance";
import { encodedIconClose } from "components/svgs/icons/Close";

import BaseSearchInput from "./BaseSearchInput";
type Props = React.ComponentProps<typeof BaseSearchInput>;

export const SearchInput = styled(BaseSearchInput)<Props>`
  --search-top-padding: ${pxToRem("7px")};
  --search-left-padding: ${pxToRem("12px")};
  position: relative;

  &:focus-within,
  &:hover {
    ${aBgLight("brand10")}
    background-color: transparent;
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

  &__input {
    width: 100%;
    background-color: var(--background-light);
    border-radius: var(--border-radius-lg);
    border: none;
    padding: var(--search-top-padding) var(--search-left-padding)
      var(--search-top-padding) ${pxToRem("36px")};
    transition: background var(--base-duration) var(--base-timing);
    color: var(--color);

    &::placeholder {
      color: var(--color-lighter);
      ${tLabel("md")}
    }

    &::-webkit-search-cancel-button {
      position: relative;
      right: 0;

      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 10px;
      background: url(${encodedIconClose({ fill: "#D1E7F0" })}) center no-repeat;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--search-left-padding);
  }
`;
