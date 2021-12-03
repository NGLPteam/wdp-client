import React from "react";
import Image from "next/image";
import * as Styled from "./ContentImage.styles";

export default function ContentImageBase({
  alt,
  url,
  width,
  height,
}: BaseProps) {
  return (
    <Styled.Wrapper className="a-bg-custom20">
      <Image
        alt={alt}
        src={url}
        width={width}
        height={height}
        layout="responsive"
      />
    </Styled.Wrapper>
  );
}

interface BaseProps {
  alt?: string;
  url: string;
  width: number;
  height: number;
}
