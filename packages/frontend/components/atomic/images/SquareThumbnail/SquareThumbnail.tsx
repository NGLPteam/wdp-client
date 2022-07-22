import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import SquareThumbnailBase from "./SquareThumbnailBase";
import { SquareThumbnailFragment$key } from "@/relay/SquareThumbnailFragment.graphql";

type BaseProps = React.ComponentProps<typeof SquareThumbnailBase>;

type ImageProps = Pick<BaseProps, "size">;

export default function SquareThumbnail({
  data,
  ...props
}: Props & ImageProps) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image?.webp;

  return image ? (
    <SquareThumbnailBase {...props} alt={image.alt} url={image.url} />
  ) : null;
}

interface Props {
  data?: SquareThumbnailFragment$key | null;
}

const fragment = graphql`
  fragment SquareThumbnailFragment on ImageAttachment {
    image: medium {
      webp {
        alt
        url
      }
    }
  }
`;
