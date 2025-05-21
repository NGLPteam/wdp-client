import * as React from "react";
import { graphql } from "react-relay";
import NextImage from "next/legacy/image";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ImageFragment$key } from "@/relay/ImageFragment.graphql";
import { ImageMetadataFragment$key } from "@/relay/ImageMetadataFragment.graphql";

type ImageProps = React.ComponentProps<typeof NextImage>;

export default function Image({
  data,
  metadata,
  alt = "",
  blurDataURL,
  ...props
}: Props) {
  const image = useMaybeFragment(fragment, data);
  const meta = useMaybeFragment(metadataFragment, metadata);

  return image && image.url ? (
    <NextImage
      {...props}
      alt={meta?.alt || image.alt || alt}
      src={image.url}
      {...(blurDataURL ? { placeholder: "blur", blurDataURL } : {})}
    />
  ) : null;
}

interface Props extends Omit<ImageProps, "src" | "alt"> {
  data?: ImageFragment$key | null;
  metadata?: ImageMetadataFragment$key | null;
  alt?: string;
  blurDataURL?: string;
}

const fragment = graphql`
  fragment ImageFragment on Image {
    alt
    url
    width
    height
  }
`;

const metadataFragment = graphql`
  fragment ImageMetadataFragment on Image {
    alt
  }
`;
