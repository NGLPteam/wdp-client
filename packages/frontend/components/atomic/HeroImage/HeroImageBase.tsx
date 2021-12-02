import React from "react";
import Image from "next/image";
import * as Styled from "./HeroImage.styles";

export default function HeroImageBase({ alt, url }: BaseProps) {
  return (
    <Styled.Wrapper className="a-bg-custom20">
      <Image
        alt={alt}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </Styled.Wrapper>
  );
}

interface BaseProps {
  alt?: string;
  url: string;
}
