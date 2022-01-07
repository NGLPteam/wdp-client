import styled from "styled-components";
import { boxShadow, transition } from "theme/base/variables";

export const Figure = styled.figure`
  position: relative;
  max-width: var(--CoverImage-max-width);
  max-height: var(--CoverImage-max-height);
  transition: ${transition.boxShadow};

  > span {
    box-shadow: ${boxShadow.popUp};
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

  a:hover & {
    box-shadow: 0px 0px 0px 1px var(--border-color-focus), ${boxShadow.popUp};
  }

  a:focus-visible {
    box-shadow: 0px 0px 0px 1px var(--border-color-focus),
      ${boxShadow.focusGlow};
  }
`;
