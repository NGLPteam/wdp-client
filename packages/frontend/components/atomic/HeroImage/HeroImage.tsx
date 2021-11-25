import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Image from "next/image";
import { graphql } from "react-relay";
import * as Styled from "./HeroImage.styles";
import { HeroImageFragment$key } from "@/relay/HeroImageFragment.graphql";

export default function HeroImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.large.webp;

  return image ? <HeroImageBase alt={imageData.alt} url={image.url} /> : null;
}

interface Props {
  data?: HeroImageFragment$key | null;
}

const fragment = graphql`
  fragment HeroImageFragment on AssetPreview {
    alt
    large {
      webp {
        url
      }
    }
  }
`;

export function HeroImageBase({ alt, url }: BaseProps) {
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
