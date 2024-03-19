import { pxToRem } from "@wdp/lib/theme/functions";
import styled, { css } from "styled-components";
import { aFocus, respond, tCopySmall, tLineClamp, tLabel } from "theme/mixins";

export const Wrapper = styled.div<{
  $thumbnailRight?: boolean;
  $hasThumbnail?: boolean;
}>`
  display: grid;
  grid-template:
    "text" auto
    / 1fr;
  gap: var(--padding-lg);

  ${({ $hasThumbnail, $thumbnailRight }) =>
    $hasThumbnail &&
    ($thumbnailRight
      ? css`
          grid-template:
            "text thumbnail" auto
            / 1fr auto;
        `
      : css`
          grid-template:
            "thumbnail text" auto
            / auto 1fr;
        `)}

  ${({ $hasThumbnail }) =>
    $hasThumbnail &&
    respond(
      css`
        grid-template:
          "thumbnail" auto
          "text" auto
          / auto;
      `,
      50,
    )}

  & + & {
    padding-block-start: var(--padding-xl);
  }
`;

export const Thumbnail = styled.div`
  grid-area: thumbnail;
  min-width: 120px;

  ${respond(
    css`
      max-width: 160px;
    `,
    50,
  )}
`;

export const ThumbnailLink = styled.a`
  ${aFocus()}
`;

export const Text = styled.div`
  grid-area: text;
  flex: 1 1 100%;
`;

export const Headers = styled.div`
  padding-block-end: ${pxToRem(12)};

  > * + * {
    padding-block-start: var(--padding-xs);
  }
`;

export const Summary = styled.p`
  padding-block-start: var(--padding-sm);
  ${tLineClamp(2)}
`;

export const Metadata = styled.div`
  ${tCopySmall}
`;

export const ReadMore = styled.div`
  margin-block-start: ${pxToRem(10)};
  ${tLabel("sm")}
`;
