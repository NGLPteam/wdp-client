import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { aLink } from "theme/mixins/appearance";

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  --logo-color: var(--brand100);

  .a-bg-brand100 & {
    --logo-color: var(--neutral00);
  }

  color: var(--logo-color);
  ${aLink()}

  > * + * {
    margin-inline-start: ${pxToRem(12)};
  }
`;

export const LogoName = styled.span`
  max-width: 50%;
`;
