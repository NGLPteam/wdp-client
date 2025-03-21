import React, { useEffect, useState } from "react";
import { BaseImage } from "components/atomic";
import { IconFactory } from "components/factories";
import * as Styled from "./BaseFileUpload.styles";
import type { State as UploadState } from "../types";

const WIDTH = 150;
const HEIGHT = 150;
const OBJECT_FIT = "contain";

const FileUploadPreview = ({ file, isLoading }: UploadStatusProps) => {
  const [fileImageUrl, setImageUrl] = useState<string>();
  useEffect(() => {
    if (file && file.type.includes("image")) {
      setImageUrl(URL.createObjectURL(file));
    }
  }, [file]);

  const isImage = file?.type.includes("image");

  // if no alt text is provided, image is considered presentation only.
  return file ? (
    <Styled.UploadPreview $isLoading={isLoading}>
      {fileImageUrl && isImage ? (
        <BaseImage
          image={{
            url: fileImageUrl,
            width: WIDTH,
            height: HEIGHT,
            alt: "",
          }}
          objectFit={OBJECT_FIT}
          unoptimized
        />
      ) : (
        <>
          <IconFactory icon="file" size="xlg" />
          {!isImage && <Styled.FileName>{file.name}</Styled.FileName>}
        </>
      )}
    </Styled.UploadPreview>
  ) : null;
};

interface UploadStatusProps {
  file: UploadState["file"];
  removeLabel?: string;
  isLoading?: boolean;
}

export default FileUploadPreview;
