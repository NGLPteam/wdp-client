import React from "react";
import Image from "next/legacy/image";
import * as Styled from "./ContentImage.styles";

type ImageProps = React.ComponentProps<typeof Image>;

export default function ContentImageBase({
  alt,
  url,
  width,
  height,
  ...imageProps
}: BaseProps) {
  return url ? (
    <Styled.Wrapper>
      <Image
        alt={alt || ""}
        src={url}
        width={width || 0}
        height={height || 0}
        layout="responsive"
        {...imageProps}
      />
    </Styled.Wrapper>
  ) : null;
}

interface BaseProps extends Pick<ImageProps, "placeholder" | "blurDataURL"> {
  alt?: string | null;
  url?: string | null;
  width?: number | null;
  height?: number | null;
}
