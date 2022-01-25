import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import BaseImage from "../BaseImage";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";

type ImageProps = React.ComponentProps<typeof BaseImage>;

export default function CoverImage({
  data,
  objectFit,
  objectPosition,
  width = 0,
  height = 0,
}: Props) {
  const image = useMaybeFragment(fragment, data);

  const webp = image?.storage && image?.medium?.webp;

  return webp && webp.url ? (
    <BaseImage
      image={{
        alt: "",
        url: webp.url,
        width: webp.width && webp.width < width ? webp.width : width,
        height: webp.height && webp.height < height ? webp.height : height,
      }}
      objectFit={objectFit}
      objectPosition={objectPosition}
    />
  ) : null;
}

interface Props {
  data?: CoverImageFragment$key | null;
  objectFit?: ImageProps["objectFit"];
  objectPosition?: ImageProps["objectPosition"];
  width?: number;
  height?: number;
}

const fragment = graphql`
  fragment CoverImageFragment on ImageAttachment {
    storage
    medium {
      webp {
        url
        height
        width
      }
    }
  }
`;
