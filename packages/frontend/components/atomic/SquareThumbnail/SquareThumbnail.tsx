import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import SquareThumbnailBase from "./SquareThumbnailBase";
import { SquareThumbnailFragment$key } from "@/relay/SquareThumbnailFragment.graphql";

export default function SquareThumbnail({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;

  return image ? (
    <SquareThumbnailBase alt={imageData.alt} url={image.url} />
  ) : null;
}

interface Props {
  data?: SquareThumbnailFragment$key | null;
}

const fragment = graphql`
  fragment SquareThumbnailFragment on AssetPreview {
    alt
    image: medium {
      webp {
        url
      }
    }
  }
`;
