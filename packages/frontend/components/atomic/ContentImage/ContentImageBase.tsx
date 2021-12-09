import React from "react";
import Image from "next/image";
import * as Styled from "./ContentImage.styles";

export default function ContentImageBase({
  alt,
  url,
  width,
  height,
}: BaseProps) {
  return url ? (
    <Styled.Wrapper className="a-bg-custom20">
      <Image
        alt={alt || ""}
        src={url}
        width={width || 0}
        height={height || 0}
        layout="responsive"
      />
    </Styled.Wrapper>
  ) : null;
}

interface BaseProps {
  alt?: string | null;
  url: string | null;
  width: number | null;
  height: number | null;
}
