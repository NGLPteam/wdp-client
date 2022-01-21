import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ContentImageBase from "./ContentImageBase";
import { ContentImageFragment$key } from "@/relay/ContentImageFragment.graphql";

export default function ContentImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;

  return image ? (
    <ContentImageBase
      alt={image.alt}
      url={image.url}
      width={image.width}
      height={image.height}
    />
  ) : null;
}

interface Props {
  data?: ContentImageFragment$key | null;
}

const fragment = graphql`
  fragment ContentImageFragment on ImageAttachment {
    image: large {
      webp {
        alt
        url
        width
        height
      }
    }
  }
`;
