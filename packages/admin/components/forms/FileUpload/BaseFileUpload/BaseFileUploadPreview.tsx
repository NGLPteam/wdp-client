import { useEffect, useState } from "react";
import { IconFactory } from "components/factories";
import * as Styled from "./BaseFileUpload.styles";
import type { State as UploadState } from "../types";

const WIDTH = 150;
const HEIGHT = 150;

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
        <Styled.Image src={fileImageUrl} width={WIDTH} height={HEIGHT} alt="" />
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
