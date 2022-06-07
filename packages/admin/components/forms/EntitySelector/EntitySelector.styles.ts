import styled from "styled-components";
import { aLink, aBgLight } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

interface WrapperProps extends React.HTMLProps<HTMLButtonElement> {
  $checked?: boolean;
}

const selectedStyles = `
  ${aBgLight("brand10")}
  --background-color: var(--brand10);
  --background-light: var(--brand20);
  transition: var(--background-transition);
  --button-background: var(--brand10);
`;

export const Wrapper = styled.div<Pick<WrapperProps, "$checked">>`
  display: flex;
  flex-wrap: none;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(16)};
  padding-inline-start: ${pxToRem(40)};
  width: 100%;
  cursor: default;

  --button-background: transparent;

  &:hover,
  &:focus,
  &:focus-within {
    ${selectedStyles}
  }

  ${({ $checked }) => $checked && selectedStyles}

  &:first-child {
    margin-block-start: ${pxToRem(12)};
  }
  &:last-child {
    margin-block-end: ${pxToRem(12)};
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Label = styled.label`
  ${aLink()}
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  text-align: left;
  padding-inline-end: ${pxToRem(15)};
  margin-block-start: -4px;

  input:disabled + & {
    cursor: default;
  }
`;

export const Metadata = styled.span`
  display: block;
  color: var(--color-light);
  margin-block-start: ${pxToRem(4)};
`;
