import styled, { css } from "styled-components";
import { aHidden, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import BaseInputWrapper from "./BaseInputWrapper";

type Props = React.ComponentProps<typeof BaseInputWrapper>;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label<Pick<Props, "hideLabel">>`
  ${({ hideLabel }) =>
    hideLabel
      ? aHidden
      : css`
          ${tLabel("sm")};
          padding-block-end: ${pxToRem("6px")};
          color: var(--color-light);
        `}
`;

export const Description = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  padding-block-start: ${basePadding(2)};
`;

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
