import React from "react";
import Image from "next/image";
import * as Styled from "./HeroImage.styles";

export default function HeroImageBase({ alt, url }: BaseProps) {
  return url ? (
    <Styled.Wrapper className="a-bg-custom20">
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
}
