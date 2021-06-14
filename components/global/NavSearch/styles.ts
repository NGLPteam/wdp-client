import React from "react";
import styled from "styled-components";
import { tLabel } from "theme/mixins/typography";
import { pxToRem } from "theme/mixins/functions";
import NavSearch from "./NavSearch";
type Props = React.ComponentProps<typeof NavSearch>;

//
// background-image: url("data:image/svg+xml;base64,${() => {
//   return encodeURIComponent(renderToStaticMarkup(typeof Close));
// }});
const StyledNavSearch = styled(NavSearch)<Props>`
  position: relative;
  color: var(--color-dark-bg);
  --search-top-padding: ${pxToRem("7px")};
  --search-left-padding: ${pxToRem("12px")};

  &__input {
    background-color: var(--brand90);
    border-radius: var(--border-radius-lg);
    border: none;
    padding: var(--search-top-padding) var(--search-left-padding)
      var(--search-top-padding) ${pxToRem("36px")};
    color: var(--color-dark-bg);

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
      background: red;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: var(--search-left-padding);
  }
`;

export default StyledNavSearch;
