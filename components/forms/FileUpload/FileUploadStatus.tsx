import React from "react";
import type { State as UploadState } from "./types";
import * as Styled from "./FileUpload.styles";

const FileUploadStatus = ({ state: { file, upload } }: UploadStatusProps) => {
  if (!file || !upload) {
    return null;
  }

  return (
    <Styled.UploadList>
      <li>{file.name}</li>
    </Styled.UploadList>
  );
};

interface UploadStatusProps {
  state: UploadState;
}

export default FileUploadStatus;
