import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";

export const Error = styled.div`
  --icon-background-color: var(--reddark);
  --icon-foreground-color: var(--neutral00);

  display: flex;
  align-items: center;
  gap: ${pxToRem(6)};
  padding-block-start: ${pxToRem(4)};
  font-size: var(--font-size-sm);
  color: var(--color-error);
  font-weight: var(--font-weight-medium);
`;
