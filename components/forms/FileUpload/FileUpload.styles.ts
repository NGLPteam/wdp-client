import styled from "styled-components";
import { aGlow, basePadding } from "theme/mixins/appearance";
import { pxToRem } from "theme/mixins/functions";
import FileUploadPreview from "./FileUploadPreview";
type FileUploadPreviewProps = React.ComponentProps<typeof FileUploadPreview>;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: ${pxToRem(250)};
  border: 1px solid var(--color-lighter);
  color: var(--color-light);

  &:hover,
  &:focus-within {
    border-color: var(--accent-color);
  }

  &:focus-within {
    ${aGlow("lightMode")}
    background-color: var(--input-focus-background, var(--brand10));
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${basePadding(4)};
  flex: 1 1 auto;
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
  text-align: center;
  font-size: var(--font-size-sm);
  white-space: pre-wrap;
`;

export const UploadPreview = styled.div<
  Pick<FileUploadPreviewProps, "isLoading">
>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: var(--color-lighter);
  font-size: var(--font-size-sm);
  padding: ${basePadding(2)};
  transition: var(--opacity-transition);

  ${({ isLoading }) => isLoading && `opacity: .7;`}
`;

export const FileName = styled.span`
  display: block;
`;

export const RemoveButton = styled.button`
  font-size: var(--font-size-sm);
  z-index: 1;

  &:hover {
    color: var(--accent-color);
  }
`;
