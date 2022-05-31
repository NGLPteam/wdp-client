import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { aLink } from "theme/mixins/appearance";

export const LogoLink = styled.a`
  --logo-color: var(--brand100);

  .a-bg-brand100 & {
    --logo-color: var(--neutral00);
  }

  display: inline-block;
  padding: 0 ${pxToRem(16)};
  color: var(--logo-color);
  line-height: ${pxToRem(34)};
  ${aLink()}
`;
