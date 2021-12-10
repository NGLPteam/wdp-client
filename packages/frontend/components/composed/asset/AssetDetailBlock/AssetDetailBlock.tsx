import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useRouteSlug } from "@wdp/lib/routes";
import * as Styled from "./AssetDetailBlock.styles";
import { AssetDetailBlockFragment$key } from "@/relay/AssetDetailBlockFragment.graphql";
import {
  BackButton,
  ContentImage,
  DownloadLink,
  NamedLink,
} from "components/atomic";

export default function AssetDetailBlock({ data }: Props) {
  const asset = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  return asset ? (
    <Styled.Section className="l-container-wide">
      {slug && (
        <NamedLink route="item.files" routeParams={{ slug }} passHref>
          <BackButton>Back to Files</BackButton>
        </NamedLink>
      )}
      {asset.preview?.storage && <ContentImage data={asset.preview} />}
      <Styled.TextBlock>
        <h3>{asset.name}</h3>
        <Styled.AssetInfo>
          <p className="t-label-lg">{asset.kind}</p>
          <ul className="t-copy-lighter">
            {asset.fileSize && <li>{formatFileSize(asset.fileSize)}</li>}
            {asset.updatedAt && (
              <li>{formatDate(asset.updatedAt, "MMM d, yyyy")}</li>
            )}
          </ul>
        </Styled.AssetInfo>
        {asset.caption && <div className="t-copy-light">{asset.caption}</div>}
      </Styled.TextBlock>
      {asset.downloadUrl && <DownloadLink href={asset.downloadUrl} />}
    </Styled.Section>
  ) : null;
}

interface Props {
  data?: AssetDetailBlockFragment$key | null;
}

const fragment = graphql`
  fragment AssetDetailBlockFragment on Node {
    ... on Asset {
      slug
      caption
      kind
      downloadUrl
      fileSize
      name
      preview {
        storage
        ...ContentImageFragment
      }
    }
    ... on AssetImage {
      updatedAt
    }
  }
`;
