import styled from "styled-components";
import { basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const LogoLink = styled.a`
  --logo-background-hover: var(--brand90);
  --logo-color-hover: var(--neutral00);
  --logo-background: var(--brand10);
  --logo-color: var(--brand100);

  .a-bg-brand100 & {
    --logo-background: var(--brand90);
    --logo-color: var(--neutral00);
    --logo-background-hover: var(--brand10);
    --logo-color-hover: var(--brand100);
  }

  display: inline-block;
  border-radius: var(--logo-border-radius, var(--border-radius-xlg));
  background-color: var(--logo-background);
  padding: 0 ${basePadding(4)};
  color: var(--logo-color);
  transition: var(--background-transition), var(--color-transition);
  line-height: ${pxToRem("34px")};

  &:hover {
    background-color: var(--logo-background-hover);
    color: var(--logo-color-hover);
  }
`;
