import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import HeroImageBase from "./HeroImageBase";
import { HeroImageFragment$key } from "@/relay/HeroImageFragment.graphql";

export default function HeroImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;

  return image ? <HeroImageBase alt={imageData.alt} url={image.url} /> : null;
}

interface Props {
  data?: HeroImageFragment$key | null;
}

const fragment = graphql`
  fragment HeroImageFragment on AssetPreview {
    alt
    image: large {
      webp {
        url
      }
    }
  }
`;
