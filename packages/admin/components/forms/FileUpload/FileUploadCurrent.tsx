import React from "react";
import * as Styled from "./FileUpload.styles";
import { BaseImage } from "components/atomic";

const WIDTH = 150;
const HEIGHT = 150;
const OBJECT_FIT = "contain";

const FileUploadCurrent = ({ image }: Props) => {
  // if no alt text is provided, image is considered presentation only.
  // TODO: Show current file, if any
  return image ? (
    <Styled.UploadPreview>
      {image && image.png && image.png.url && (
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
      )}
    </Styled.UploadPreview>
  ) : null;
};

interface Props {
  /* Current image */
  image?: Image | null;
}

export interface Png {
  alt?: string | null;
  url?: string | null;
}

export interface Image {
  png?: Png | null;
}

export default FileUploadCurrent;
