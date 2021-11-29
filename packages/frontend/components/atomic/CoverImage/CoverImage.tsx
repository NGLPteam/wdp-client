import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Image from "next/image";
import { graphql } from "react-relay";
import * as Styled from "./CoverImage.styles";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";

export default function CoverImage({ data, maxWidth = 278 }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;

  return image ? (
    <CoverImageBase
      alt={imageData.alt}
      url={image.url}
      width={image.width}
      height={image.height}
      maxWidth={maxWidth}
    />
  ) : null;
}

interface Props {
  data?: CoverImageFragment$key | null;
  maxWidth?: number;
}

const fragment = graphql`
  fragment CoverImageFragment on AssetPreview {
    alt
    image: large {
      webp {
        url
        width
        height
      }
    }
  }
`;

export function CoverImageBase({
  alt,
  url,
  width,
  height,
  maxWidth = 278,
}: BaseProps) {
  const style = { maxWidth };

  return (
    <Styled.Figure style={style}>
      <Image
        alt={alt}
        src={url}
        width={width}
        height={height}
        layout="responsive"
      />
    </Styled.Figure>
  );
}

interface BaseProps {
  alt?: string;
  url: string;
  width: number;
  height: number;
  maxWidth?: number;
}
