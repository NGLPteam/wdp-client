import styled from "styled-components";
import { aGlow, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: ${pxToRem(160)};
  border: 1px solid var(--color-lighter);
  color: var(--color-light);
  padding: ${basePadding(4)};

  &:hover,
  &:focus-within {
    border-color: var(--accent-color);
  }

  &:focus-within {
    ${aGlow("lightMode")}
    background-color: var(--input-focus-background, var(--brand10));
  }
`;

export const FileInput = styled.input`
  appearance: none;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  ::-webkit-file-upload-button {
    visibility: hidden;
  }

  &:focus,
  &:hover {
    outline: 0;
    border-color: var(--accent-color);
  }
`;

export const UploadText = styled.p`
  padding-block-start: ${pxToRem(5)};
  text-align: center;
  font-size: var(--font-size-sm);
`;

export const UploadList = styled.ul`
  padding-block-start: ${basePadding(2)};
  text-align: center;
  color: var(--color-lighter);
  font-size: var(--font-size-sm);
`;
