import styled from "styled-components";
import { noInsetSupport } from "theme/mixins/base";

export const Wrapper = styled.div`
  position: absolute;
  inset-inline-start: 0;
  inset-inline-end: 0;
  inset-block-start: var(--main-top-pos);

  ${noInsetSupport(`
    left: 0;
    right: 0;
    top: var(--main-top-pos);
  `)}
`;
