import React from "react";
import Image from "next/image";
import * as Styled from "./SquareThumbnail.styles";

export default function SquareThumbnailBase({ alt, url }: BaseProps) {
  return url ? (
    <Styled.Figure className="a-bg-custom20">
      <Image
        alt={alt || ""}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Styled.Figure>
  ) : null;
}

interface BaseProps {
  alt?: string | null;
  url: string | null;
}
