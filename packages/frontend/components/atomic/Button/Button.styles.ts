import { pxToRem } from "@wdp/lib/theme/functions";
import { aHidden } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { aButton, respond } from "theme/mixins";

export const ButtonStyles = styled.button<{
  $hideLabelOnMobile?: true;
  $isBlock?: true;
  $style?: "primary" | "secondary";
  $size?: "lg" | "sm";
}>`
  ${({ $style = "primary", $size = "lg" }) => aButton($style, $size)}

  ${({ $isBlock }) => $isBlock && `display: flex; width: 100%;`}

  > * + * {
    margin-inline-start: ${pxToRem(8)};
  }

  svg {
    flex: 0 0 auto;
  }

  ${({ $hideLabelOnMobile }) =>
    $hideLabelOnMobile &&
    respond(
      `
      > * + * {
        margin-inline-start: 0;
      }
      `,
      50,
    )}
`;

export const ButtonLabel = styled.span<{ $hideOnMobile?: true }>`
  flex: 1 1 auto;
  text-align: left;

  ${({ $hideOnMobile }) => $hideOnMobile && respond(aHidden, 50)}
`;
