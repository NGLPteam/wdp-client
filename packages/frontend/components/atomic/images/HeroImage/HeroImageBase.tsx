import React from "react";
import Image from "next/legacy/image";
import * as Styled from "./HeroImage.styles";

type ImageProps = React.ComponentProps<typeof Image>;

export default function HeroImageBase({ alt, url, ...imageProps }: BaseProps) {
  return url ? (
    <Styled.Wrapper className="a-bg-custom20">
      <Image
        alt={alt || ""}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        {...imageProps}
      />
    </Styled.Wrapper>
  ) : null;
}

interface BaseProps extends Pick<ImageProps, "placeholder" | "blurDataURL"> {
  alt?: string | null;
  url: string | null;
}
