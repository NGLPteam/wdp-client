import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { DownloadLink } from "components/atomic";
import { MetadataProperty } from "components/layout";
import { AssetPropertyFragment$key } from "@/relay/AssetPropertyFragment.graphql";

export default function AssetProperty({
  data,
  showPlaceholder,
  ...props
}: Props) {
  const property = useMaybeFragment(fragment, data);

  const label = props.label ?? property?.label;

  const filename =
    property?.asset?.name && property.asset.kind === "pdf"
      ? `${property.asset.name.toLowerCase().replace(" ", "_")}.pdf`
      : undefined;

  console.debug({ property });

  return label && (property?.asset || showPlaceholder) ? (
    <MetadataProperty label={label}>
      {property?.asset?.name && (
        <DownloadLink
          href={property.asset.downloadUrl || ""}
          className="t-copy"
          filename={filename}
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
        kind
        downloadUrl
      }
    }
  }
`;
