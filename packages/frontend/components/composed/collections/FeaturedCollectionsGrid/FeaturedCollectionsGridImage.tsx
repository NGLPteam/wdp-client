import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { FeaturedCollectionsGridImageFragment$key } from "@/relay/FeaturedCollectionsGridImageFragment.graphql";
import * as Styled from "./FeaturedCollectionsGrid.styles";

export default function FeaturedCollectionsGridImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  const image = useMemo(
    () =>
      imageData?.heroImage?.storage ? imageData.heroImage.image.webp : null,
    [imageData],
  );

  return image && image.url ? (
    <Styled.Image
      role="presentation"
      alt={image.alt || ""}
      src={image.url}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
    />
  ) : null;
}

interface Props {
  data?: FeaturedCollectionsGridImageFragment$key | null;
}

const fragment = graphql`
  fragment FeaturedCollectionsGridImageFragment on Entity {
    heroImage {
      storage
      image: large {
        webp {
          alt
          url
          width
          height
        }
      }
    }
  }
`;
