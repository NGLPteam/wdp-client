import { aHidden } from "@wdp/lib/theme/mixins";
import styled from "styled-components";
import { respond } from "theme/mixins";

export const ButtonStyles = styled.button<{
  $hideLabelOnMobile?: true;
}>`
  > * + * {
    margin-inline-start: 8px;
  }

  svg {
    flex: 1 0 auto;
  }

  ${({ $hideLabelOnMobile }) =>
    $hideLabelOnMobile &&
    respond(
      `
      > * + * {
        margin-inline-start: 0;
      }
      `,
      50
    )}
`;

export const ButtonLabel = styled.span<{ $hideOnMobile?: true }>`
  ${({ $hideOnMobile }) => $hideOnMobile && respond(aHidden, 50)}
`;
