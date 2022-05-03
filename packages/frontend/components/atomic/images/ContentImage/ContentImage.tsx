import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import ContentImageBase from "./ContentImageBase";
import { ContentImageFragment$key } from "@/relay/ContentImageFragment.graphql";

export default function ContentImage({ data }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  if (!imageData) return null;

  const { image, placeholder } = imageData;

  return image ? (
    <ContentImageBase
      alt={image.webp.alt}
      url={image.webp.url}
      width={image.webp.width}
      height={image.webp.height}
      {...(placeholder?.webp?.url && {
        placeholder: "blur",
        blurDataURL: placeholder.webp.url,
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
    placeholder: thumb {
      webp {
        url
      }
    }
  }
`;
