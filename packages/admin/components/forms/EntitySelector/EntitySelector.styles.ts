import styled from "styled-components";
import { pxToRem } from "theme/mixins/functions";
import { aBgLight } from "theme/mixins/appearance";
import { IconFactory } from "components/factories";

interface WrapperProps extends React.HTMLProps<HTMLDivElement> {
  $height: string;
}

export const Wrapper = styled.div<Pick<WrapperProps, "$height">>`
  border: 1px solid;
  border-color: var(--input-border-color);
  border-radius: ${pxToRem(4)};
  margin-block-end: ${pxToRem(8)};
  cursor: default;
  height: ${({ $height }) => $height};
  overflow: scroll;
  position: relative;
`;

export const Back = styled.button`
  display: flex;
  flex-wrap: none;
  align-items: center;
  padding: ${pxToRem(16)};
  width: 100%;

  --button-control-opacity: 0;
  --button-control-visibility: 0;

  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-within {
    ${aBgLight("brand10")}
    --background-color: var(--brand10);
    --background-light: var(--brand20);
    transition: var(--background-transition);

    --button-control-opacity: 1;
    --button-control-visibility: 1;
    --checkbox-opacity: 1;
    --checkbox-visibility: 1;
  }
`;

export const Arrow = styled(IconFactory)`
  transform: rotate(-90deg);
  margin-inline-end: ${pxToRem(8)};
`;
