import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DownloadLink } from "components/atomic";
import { MetadataProperty } from "components/layout";
import { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";

export default function AssetProperty({ data, label, showPlaceholder }: Props) {
  const property = useMaybeFragment(fragment, data);

  const hasLabel = label ?? property?.label;

  return hasLabel && (property?.asset || showPlaceholder) ? (
    <MetadataProperty label={hasLabel}>
      {property?.asset?.name && (
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
  showPlaceholder?: boolean;
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
