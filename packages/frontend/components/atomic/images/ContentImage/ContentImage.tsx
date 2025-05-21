import * as React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { ContentImageFragment$key } from "@/relay/ContentImageFragment.graphql";
import ContentImageBase from "./ContentImageBase";

export default function ContentImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  if (!imageData) return null;

  const { image, blur } = imageData;

  return image ? (
    <ContentImageBase
      alt={image.webp.alt}
      url={image.webp.url}
      width={image.webp.width}
      height={image.webp.height}
      {...(blur?.webp?.url && {
        blurDataURL: blur.webp.url,
      })}
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
    blur: thumb {
      webp {
        url
      }
    }
  }
`;
