import styled from "styled-components";
import { transition } from "theme/base/variables";
import { aImageFocus, aImageHover } from "theme/mixins";

export const Wrapper = styled.div`
  border: 1px solid var(--Avatar-border-color);
  border-radius: 50%;
  background: var(--accent-color);
  overflow: hidden;
  width: var(--Avatar-size);
  height: var(--Avatar-size);
  transition: ${transition.boxShadow}, ${transition.border};

  a:hover & {
    ${aImageHover}
  }

  a[data-focus-visible-added] & {
    ${aImageFocus}
  }
`;
