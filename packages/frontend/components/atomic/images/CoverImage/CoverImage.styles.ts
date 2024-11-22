import styled from "styled-components";
import { boxShadow, transition } from "theme/base/variables";
import { aImageFocus, aImageHover } from "theme/mixins";

export const Figure = styled.figure`
  position: relative;
  max-width: var(--CoverImage-max-width);
  max-height: var(--CoverImage-max-height);
  transition: ${transition.boxShadow};
  box-shadow: ${boxShadow.popUp};

  a:hover & {
    ${aImageHover}
  }

  a:focus-visible & {
    ${aImageFocus}
  }

  > * {
    vertical-align: top;
  }

  /* These properties need to be set for a flexible image width and height,
   * which we need to properly set the box shadow
   */
  img {
    display: block;
    /* This must match the wrapper's width and height */
    max-width: var(--CoverImage-max-width);
    max-height: var(--CoverImage-max-height);
    height: auto;
    width: auto;
  }
`;
