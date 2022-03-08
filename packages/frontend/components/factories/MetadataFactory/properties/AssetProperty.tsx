import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";
import { DownloadLink } from "components/atomic";
import { MetadataProperty } from "components/layout";

export default function AssetProperty({ data, label }: Props) {
  const property = useMaybeFragment(fragment, data);

  return property ? (
    <MetadataProperty label={label || property.label}>
      {property.asset?.name && (
        <DownloadLink
          href={property.asset.downloadUrl || ""}
          className="t-copy"
        >
          {property.asset.name}
        </DownloadLink>
      )}
    </MetadataProperty>
  ) : null;
}

interface Props {
  data?: AssetPropertyFragment$key | null;
  label?: string;
}

const fragment = graphql`
  fragment AssetPropertyFragment on AssetProperty {
    fullPath
    label
    asset {
      ... on Asset {
        name
        downloadUrl
      }
    }
  }
`;
