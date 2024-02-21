import React from "react";
import Image from "next/legacy/image";
import * as Styled from "./SquareThumbnail.styles";

export default function SquareThumbnailBase({ alt, url, size }: BaseProps) {
  return url ? (
    <Styled.Wrapper className="a-bg-custom20" $size={size}>
      <Image
        alt={alt || ""}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Styled.Wrapper>
  ) : null;
}

interface BaseProps {
  alt?: string | null;
  url: string | null;
  size?: number;
}
