import { FileIconFactory } from "@wdp/lib/factories";
import { useTranslation } from "react-i18next";
import * as Styled from "./BaseFileUpload.styles";
import { BaseImage } from "components/atomic";
import { AssetKind } from "types/graphql-schema";

const WIDTH = 150;
const HEIGHT = 150;
const OBJECT_FIT = "contain";

function formatFileSize(bytes: number) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

  if (bytes === 0) return "0 Bytes";

  const i = Math.floor(Math.log(bytes) / Math.log(1024));

  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
}

const FileUploadCurrent = ({ image, kind, fileSize }: Props) => {
  const { t } = useTranslation();

  // if no alt text is provided, image is considered presentation only.
  return image ? (
    <Styled.UploadPreview>
      {image && image.png && image.png.url ? (
        <BaseImage
          image={{
            ...image.png,
            width: WIDTH,
            height: HEIGHT,
            alt: image.png.alt || "",
            url: image.png.url,
          }}
          objectFit={OBJECT_FIT}
        />
      ) : (
        <>
          <FileIconFactory kind={kind} />
          <span className="t-capitalize">
            {t("forms.file.current_file_type", { type: kind })},{" "}
            {fileSize && formatFileSize(fileSize)}
          </span>
        </>
      )}
    </Styled.UploadPreview>
  ) : null;
};

interface Props {
  /** Current image */
  image?: Image | null;
  /** The asset kind: image, audio, etc */
  kind?: AssetKind;
  fileSize?: number;
}

export interface Png {
  alt?: string | null;
  url?: string | null;
}

export interface Image {
  png?: Png | null;
}

export default FileUploadCurrent;
