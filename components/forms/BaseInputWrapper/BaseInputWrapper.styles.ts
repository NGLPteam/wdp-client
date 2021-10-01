import styled, { css } from "styled-components";
import { aHidden } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";
import BaseInputWrapper from "./BaseInputWrapper";

type Props = React.ComponentProps<typeof BaseInputWrapper>;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: var(--form-grid-flex-basis);
`;

export const Label = styled.label<Pick<Props, "hideLabel">>`
  ${({ hideLabel }) =>
    hideLabel
      ? aHidden
      : css`
          ${tLabel("sm")};
          padding-block-end: ${pxToRem(6)};
          color: var(--color-light);
        `}
`;

export const Description = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-light);
  font-style: italic;
  padding-block-start: ${pxToRem(8)};
`;
