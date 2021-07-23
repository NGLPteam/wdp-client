import styled, { css } from "styled-components";
import { aBgLight, basePadding } from "theme/mixins/appearance";
import { respond } from "theme/mixins/base";
import Grid from "./Grid";
type Props = React.ComponentProps<typeof Grid>;

const MOBILE_BREAK = 40;
const TABLET_BREAK = 70;

export const Wrapper = styled.div<Partial<Props>>`
  --checkbox-opacity: 0;
  margin-inline: -${basePadding(4)};

  ${({ showCheckboxes }) => showCheckboxes && `--checkbox-opacity: 1;`}

  ${respond(
    css`
      --checkbox-opacity: 1;
      --actions-opacity: 1;
    `,
    TABLET_BREAK
  )}

  ${respond(
    css`
      margin-inline: auto;
    `,
    TABLET_BREAK
  )}
`;

export const Item = styled.div`
  display: grid;
  grid-template:
    "checkbox actions" auto
    "image image" minmax(auto, 180px)
    "children children" 1fr
    / auto 1fr;
  padding-block: ${basePadding(2)} ${basePadding(4)};
  padding-inline: ${basePadding(4)} ${basePadding(2)};
  border-radius: ${basePadding(2)};
  gap: ${basePadding(2)};

  ${respond(
    `
      grid-template:
        "checkbox image children actions" 1fr
        / auto minmax(auto, 64px) 1fr auto;
      padding-inline: 0;
      padding-block-start: 0;
      gap: ${basePadding(3)};
      border-radius: 0;
      border-bottom: 1px solid var(--border-color);
    `,
    MOBILE_BREAK
  )}

  &:hover,
  &:focus-within {
    --checkbox-opacity: 1;
    --actions-opacity: 1;

    ${aBgLight("brand10")}
    transition: var(--background-transition);

    ${respond(
      css`
        background-color: transparent;
      `,
      MOBILE_BREAK
    )}
  }
`;

export const Checkbox = styled.div`
  grid-area: checkbox;
  opacity: var(--checkbox-opacity, 0);
  padding-block-start: ${basePadding(2)};
  min-height: ${basePadding(10)};
`;

export const Actions = styled.div`
  grid-area: actions;
  opacity: var(--actions-opacity, 0);
  text-align: end;
`;

export const Thumbnail = styled.div`
  grid-area: image;
  display: flex;
  padding-inline-end: ${basePadding(2)};
  padding-block-end: ${basePadding(2)};

  ${respond(
    css`
      display: block;
      padding-block-end: 0;
    `,
    MOBILE_BREAK
  )}

  /* Make sure the image never exceeds the bounding box */
  > div, > div > img {
    max-height: 100%;
    max-width: 100%;
    object-position: bottom left;
  }

  ${respond(
    css`
      > div > img {
        object-position: top left;
      }
    `,
    MOBILE_BREAK
  )}
`;

export const Children = styled.div`
  grid-area: children;

  > * + * {
    margin-block-start: ${basePadding(2)};
  }
`;
