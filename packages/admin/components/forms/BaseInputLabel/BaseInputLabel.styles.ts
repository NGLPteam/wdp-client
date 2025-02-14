import styled, { css } from "styled-components";
import { aHidden } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import { tLabel } from "theme/mixins/typography";

export const Label = styled.label<Props>`
  ${({ $hideLabel }) =>
    $hideLabel
      ? aHidden
      : css`
          ${tLabel("sm")};
          display: inline-block;
          padding-block-end: ${pxToRem(6)};
          color: var(--color-light);
        `}
`;

interface Props {
  $hideLabel?: boolean;
}
