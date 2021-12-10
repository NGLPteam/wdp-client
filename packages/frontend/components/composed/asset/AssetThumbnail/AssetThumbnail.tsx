import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { FileThumbnail } from "components/atomic";
import { AssetThumbnailFragment$key } from "@/relay/AssetThumbnailFragment.graphql";
import * as Styled from "./AssetThumbnail.styles";

export default function AssetThumbnail({ data }: Props) {
  const asset = useMaybeFragment(fragment, data);
  const image = asset?.preview?.storage ? asset.preview.image?.webp : null;

  return asset ? (
    <Styled.ImageLink href="#">
      <FileThumbnail alt={image?.alt} url={image?.url} kind={asset.kind} />
    </Styled.ImageLink>
  ) : null;
}

interface Props {
  data?: AssetThumbnailFragment$key | null;
}

const fragment = graphql`
  fragment AssetThumbnailFragment on Asset {
    kind
    slug
    preview {
      storage
      image: small {
        webp {
          alt
          url
        }
      }
    }
  }
`;
