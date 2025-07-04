import * as React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ImageFragment$key } from "@/relay/ImageFragment.graphql";
import * as Styled from "./Image.styles";

export default function Image({
  data,
  alt = "",
  objectFit,
  objectPosition,
  width,
  height,
  className,
}: Props) {
  const image = useMaybeFragment(fragment, data);

  return image && image.url ? (
    <Styled.Image
      alt={image.alt || alt}
      src={image.url}
      className={className}
      $objectFit={objectFit}
      $objectPosition={objectPosition}
      width={width ?? image.width ?? undefined}
      height={height ?? image.height ?? undefined}
    />
  ) : null;
}

interface Props {
  data?: ImageFragment$key | null;
  alt?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: "fill" | "contain" | "cover" | "none";
  objectPosition?: string;
  className?: string;
}

const fragment = graphql`
  fragment ImageFragment on Image {
    alt
    url
    width
    height
  }
`;
