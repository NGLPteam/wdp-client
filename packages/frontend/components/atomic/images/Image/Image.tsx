import * as React from "react";
import { graphql } from "react-relay";
import NextImage from "next/image";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { ImageFragment$key } from "@/relay/ImageFragment.graphql";
import { ImageMetadataFragment$key } from "@/relay/ImageMetadataFragment.graphql";

type ImageProps = React.ComponentProps<typeof NextImage>;

export default function Image({ data, metadata, ...props }: Props) {
  const image = useMaybeFragment(fragment, data);

  const meta = useMaybeFragment(metadataFragment, metadata);

  return image && image.url ? (
    <NextImage {...props} alt={meta?.alt || image.alt || ""} src={image.url} />
  ) : null;
}

interface Props extends Omit<ImageProps, "src" | "alt"> {
  data?: ImageFragment$key | null;
  metadata?: ImageMetadataFragment$key | null;
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