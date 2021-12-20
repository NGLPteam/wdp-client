import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useRouteSlug } from "@wdp/lib/routes";
import AssetThumbnail from "../../AssetThumbnail";
import * as Styled from "./AssetBlockItem.styles";
import { AssetBlockItemFragment$key } from "@/relay/AssetBlockItemFragment.graphql";
import { DownloadLink, NamedLink } from "components/atomic";

export default function AssetBlockItem({ data }: Props) {
  const file = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  return file ? (
    <Styled.Wrapper>
      <Styled.ImageLink href="#">
        <AssetThumbnail data={file} />
      </Styled.ImageLink>
      <Styled.TextBlock>
        <h4>
          {slug && file.slug ? (
            <NamedLink
              route="item.file"
              routeParams={{ slug, file: file.slug }}
              passHref
            >
              <a href="#">{file.name}</a>
            </NamedLink>
          ) : (
            file.name
          )}
        </h4>
        <Styled.InfoBlock>
          {file.kind && <p className="t-label-sm">{file.kind}</p>}
          <Styled.MetadataList className="t-copy-lighter t-copy-sm">
            {file.updatedAt && (
              <li>{formatDate(file.updatedAt, "MMM d, yyyy")}</li>
            )}
            {file.fileSize && <li>{formatFileSize(file.fileSize)}</li>}
          </Styled.MetadataList>
        </Styled.InfoBlock>
        <Styled.Caption className="t-copy-lighter t-copy-sm">
          {file.caption}
        </Styled.Caption>
        {file.downloadUrl && (
          <DownloadLink className="t-label-sm" href={file.downloadUrl} />
        )}
      </Styled.TextBlock>
    </Styled.Wrapper>
  ) : null;
}

interface Props {
  data?: AssetBlockItemFragment$key | null;
}

const fragment = graphql`
  fragment AssetBlockItemFragment on Asset {
    ... on Asset {
      caption
      contentType
      downloadUrl
      fileSize
      kind
      name
      slug
      ...AssetThumbnailFragment
    }
    ... on AssetDocument {
      updatedAt
    }
    ... on AssetImage {
      updatedAt
    }
    ... on AssetPDF {
      updatedAt
    }
    ... on AssetAudio {
      updatedAt
    }
    ... on AssetVideo {
      updatedAt
    }
  }
`;
