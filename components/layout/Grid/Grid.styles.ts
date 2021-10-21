import styled, { css } from "styled-components";
import { aBgLight } from "theme/mixins/appearance";
import { fluidScale, respond } from "theme/mixins/base";
import { pxToRem } from "theme/mixins/functions";
import Grid from "./Grid";
type Props = React.ComponentProps<typeof Grid>;

const MOBILE_BREAK = "tableBreak";
const TABLET_BREAK = 70;

export const Wrapper = styled.div<Partial<Props>>`
  --checkbox-opacity: 0;
  border-top: 1px solid var(--border-color);

  ${({ showCheckboxes }) => showCheckboxes && `--checkbox-opacity: 1;`}

  ${respond(
    css`
      --checkbox-opacity: 1;
      --actions-opacity: 1;
    `,
    TABLET_BREAK
  )}
`;

export const Inner = styled.div`
  display: grid;
  row-gap: var(--grid-column-gap);
  column-gap: var(--grid-column-gap);
  grid-template-columns: repeat(4, 1fr);
  margin-inline-start: -${pxToRem(16)};
  margin-inline-end: -${pxToRem(16)};
  padding-block-start: ${pxToRem(16)};
  padding-block-end: ${pxToRem(32)};

  ${respond(`grid-template-columns: repeat(2, 1fr);`, 60)}
  ${respond(`grid-template-columns: repeat(1, 1fr);`, MOBILE_BREAK)}

  ${respond(
    `
    margin-inline-start: auto;
    margin-inline-end: auto;
  `,
    TABLET_BREAK
  )}
`;

export const Item = styled.div`
  display: grid;
  grid-template:
    "checkbox actions" auto
    "image image" auto
    "children children" 1fr
    / auto 1fr;
  padding-block-start: ${pxToRem(8)};
  padding-block-end: ${pxToRem(16)};
  padding-inline-start: ${pxToRem(16)};
  padding-inline-end: ${pxToRem(8)};
  border-radius: ${pxToRem(8)};
  gap: ${pxToRem(8)};
  background-color: transparent;
  transition: var(--background-transition);

  ${respond(
    `
      grid-template:
        "checkbox image children actions" 1fr
        / auto auto 1fr auto;
      padding-inline-start: 0;
      padding-inline-end: 0;
      padding-block-start: 0;
      gap: ${pxToRem(12)};
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
  padding-block-start: ${pxToRem(8)};
  padding-block-end: ${pxToRem(8)};
`;

export const Actions = styled.div`
  grid-area: actions;
  opacity: var(--actions-opacity, 0);
  text-align: end;
  --button-control-spacing: ${pxToRem(10)};
`;

export const Thumbnail = styled.div`
  grid-area: image;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-inline-end: ${pxToRem(8)};
  padding-block-end: ${pxToRem(8)};
  height: ${fluidScale("190px", "150px")};
  max-width: 100%;
  aspect-ratio: 1 / 1;

  ${respond(
    `
      display: block;
      padding-block-end: 0;
      height: 60px;
    `,
    MOBILE_BREAK
  )}

  > a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  /* Make sure the image never exceeds the bounding box */
  > div,
  > div > img {
    max-height: 100%;
    max-width: 100%;
    object-position: bottom left;
  }

  > div > img,
  > a > div > img {
    object-position: bottom left;

    ${respond(`object-position: top left;`, MOBILE_BREAK)}
  }
`;

export const Children = styled.div`
  grid-area: children;
  color: var(--color-light);

  > * + * {
    margin-block-start: ${pxToRem(8)};
    font-size: var(--font-size-sm);
  }
`;
