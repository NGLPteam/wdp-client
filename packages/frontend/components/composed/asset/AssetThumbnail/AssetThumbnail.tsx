import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./AssetThumbnail.styles";
import { FileThumbnail, NamedLink } from "components/atomic";
import { AssetThumbnailFragment$key } from "@/relay/AssetThumbnailFragment.graphql";

export default function AssetThumbnail({ data }: Props) {
  const asset = useMaybeFragment(fragment, data);
  const image = asset?.preview?.storage ? asset.preview.image?.webp : null;
  const slug = useRouteSlug();

  function renderThumbnail() {
    return asset ? (
      <FileThumbnail alt={image?.alt} url={image?.url} kind={asset.kind} />
    ) : null;
  }

  return asset?.slug && slug ? (
    <NamedLink
      route="item.file"
      routeParams={{ slug, file: asset.slug }}
      passHref
    >
      <Styled.ImageLink>{renderThumbnail()}</Styled.ImageLink>
    </NamedLink>
  ) : (
    renderThumbnail()
  );
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
