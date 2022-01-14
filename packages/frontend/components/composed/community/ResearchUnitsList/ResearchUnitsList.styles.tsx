import styled from "styled-components";
import { pxToRem } from "@wdp/lib/theme/functions";
import { default as BaseImage } from "next/image";

export const Inner = styled.div`
  padding-block-start: ${pxToRem(100)};
  padding-block-end: ${pxToRem(100)};
`;

export const TextColumn = styled.div`
  grid-column: 2 / 6;
`;

export const HeaderBlock = styled.div`
  padding-block-end: ${pxToRem(12)};
  border-bottom: 1px solid currentColor;
`;

export const UnitsList = styled.ul`
  padding-block-start: ${pxToRem(28)};
  padding-block-end: var(--padding-lg);
  border-bottom: 1px solid currentColor;
`;

export const ListItem = styled.li`
  & + & {
    margin-block-start: ${pxToRem(20)};
  }
`;

export const UnitLink = styled.a`
  display: flex;

  > svg {
    flex-shrink: 0;
    margin-block-start: ${pxToRem(4)};
  }

  > * + * {
    padding-inline-start: ${pxToRem(14)};
  }
`;

export const ImageColumn = styled.div`
  grid-column: 7 / 12;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: ${pxToRem(300)};
`;

export const Image = styled(BaseImage)`
  z-index: 0;
  width: 100%;
  height: auto;
  border-radius: ${pxToRem(16)};
`;
