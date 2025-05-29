import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { SquareThumbnailFragment$key } from "@/relay/SquareThumbnailFragment.graphql";
import SquareThumbnailBase from "./SquareThumbnailBase";

type BaseProps = React.ComponentProps<typeof SquareThumbnailBase>;

type ImageProps = Pick<BaseProps, "size">;

export default function SquareThumbnail({
  data,
  ...props
}: Props & ImageProps) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.thumb?.webp;

  return image ? (
    <SquareThumbnailBase {...props} alt={image.alt} url={image.url} />
  ) : null;
}

interface Props {
  data?: SquareThumbnailFragment$key | null;
}

const fragment = graphql`
  fragment SquareThumbnailFragment on ImageAttachment {
    thumb: medium {
      webp {
        alt
        url
      }
    }
  }
`;
