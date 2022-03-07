import styled from "styled-components";
import { transition } from "theme/base/variables";
import { aImageFocus, aImageHover } from "theme/mixins";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: auto;
  height: auto;
  transition: ${transition.boxShadow};

  a:hover & {
    ${aImageHover}
  }

  a[data-focus-visible-added] & {
    ${aImageFocus}
  }
`;
