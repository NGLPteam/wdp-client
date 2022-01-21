import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import HeroImageBase from "./HeroImageBase";
import { HeroImageFragment$key } from "@/relay/HeroImageFragment.graphql";
import { HeroImageMetadataFragment$key } from "@/relay/HeroImageMetadataFragment.graphql";

export default function HeroImage({ data, metadata }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  const imageMetadata = useMaybeFragment(metadataFragment, metadata);

  const image = imageData?.image;

  return image ? (
    <HeroImageBase
      alt={imageMetadata?.alt || image.alt || ""}
      url={image.url}
    />
  ) : null;
}

interface Props {
  data?: HeroImageFragment$key | null;
  metadata?: HeroImageMetadataFragment$key | null;
}

const fragment = graphql`
  fragment HeroImageFragment on ImageAttachment {
    image: original {
      alt
      url
    }
  }
`;

const metadataFragment = graphql`
  fragment HeroImageMetadataFragment on ImageMetadata {
    alt
  }
`;
