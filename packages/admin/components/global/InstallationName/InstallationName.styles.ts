import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { aLink } from "theme/mixins/appearance";

export const Link = styled.a`
  --instance-link-color: var(--brand100);

  .a-bg-brand100 & {
    --instance-link-color: var(--neutral00);
  }

  display: inline-block;
  padding-inline-end: ${pxToRem(16)};
  color: var(--instance-link-color);
  ${aLink()}
`;
