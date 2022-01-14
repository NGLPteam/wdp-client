import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import HeroImageBase from "./HeroImageBase";
import { HeroImageFragment$key } from "@/relay/HeroImageFragment.graphql";

export default function HeroImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image;

  return image ? <HeroImageBase alt={image.alt} url={image.url} /> : null;
}

interface Props {
  data?: HeroImageFragment$key | null;
}

const fragment = graphql`
  fragment HeroImageFragment on ImageAttachment {
    image: original {
      alt
      url
    }
  }
`;
