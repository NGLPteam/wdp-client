import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { Button } from "components/atomic";
import { AssetDownloadButtonFragment$key } from "@/relay/AssetDownloadButtonFragment.graphql";

/* Simple download text and icon,
 * style can be changed using the className property */
export default function AssetDownloadButton({ data, children }: Props) {
  const assetData = useMaybeFragment(fragment, data);

  const { t } = useTranslation();

  return assetData?.asset?.downloadUrl ? (
    <Button
      as="a"
      href={assetData.asset.downloadUrl}
      size="sm"
      target="_blank"
      download
      icon="download"
    >
      {children ||
        t("common.download_name", {
          name: assetData?.asset?.kind
            ? t(`asset.${assetData?.asset?.kind}`)
            : "",
        })}
    </Button>
  ) : null;
}

interface Props {
  children?: React.ReactNode;
  data?: AssetDownloadButtonFragment$key | null;
}

const fragment = graphql`
  fragment AssetDownloadButtonFragment on AssetProperty {
    asset {
      ... on Asset {
        name
        downloadUrl
        kind
        contentType
      }
    }
  }
`;
