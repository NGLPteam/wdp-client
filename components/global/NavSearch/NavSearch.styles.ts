import React from "react";
import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import { aBgDark, aBgLight } from "theme/mixins/appearance";
import { encodedIconClose } from "components/svgs/icons/Close";

import NavSearchInput from "./NavSearchInput";
type Props = React.ComponentProps<typeof NavSearchInput>;

export const SearchInput = styled(NavSearchInput)<Props>`
  position: relative;
  color: var(--color-dark-bg);
  --search-top-padding: ${pxToRem("7px")};
  --search-left-padding: ${pxToRem("12px")};

  &:focus-within &__input,
  &:hover &__input {
    ${aBgLight()}

    &::-webkit-search-cancel-button {
      background-image: url(${encodedIconClose({ fill: "#000" })});
    }
  }

  &:focus-within &__icon,
  &:hover &__icon {
    color: var(--color-base);
  }

  &__input {
    ${aBgDark("brand90")}
    border-radius: var(--border-radius-lg);
    border: none;
    padding: var(--search-top-padding) var(--search-left-padding)
      var(--search-top-padding) ${pxToRem("36px")};
    transition: background var(--base-duration) var(--base-timing);
    color: var(--neutral00);

    &::placeholder {
      color: var(--brand50);
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
