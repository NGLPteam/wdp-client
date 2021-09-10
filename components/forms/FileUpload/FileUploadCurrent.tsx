import React from "react";
import { Image } from "components/atomic";
import * as Styled from "./FileUpload.styles";

const WIDTH = 150;
const HEIGHT = 150;
const OBJECT_FIT = "contain";

const FileUploadCurrent = ({ image }: Props) => {
  // if no alt text is provided, image is considered presentation only.
  // TODO: Show current file, if any
  return image ? (
    <Styled.UploadPreview>
      {image && image.png && (
        <Image
          image={{
            ...image.png,
            width: WIDTH,
            height: HEIGHT,
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
  alt: string;
  url: string;
}

export interface Image {
  png?: Png | null;
}

export default FileUploadCurrent;
