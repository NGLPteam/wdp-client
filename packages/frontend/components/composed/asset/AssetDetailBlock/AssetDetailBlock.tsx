import React, { useState } from "react";
import { graphql } from "react-relay";
import Image from "next/image";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useRouteSlug } from "@wdp/lib/routes";
import AssetPDFPreview from "../AssetPDFPreview";
import * as Styled from "./AssetDetailBlock.styles";
import { AssetDetailBlockFragment$key } from "@/relay/AssetDetailBlockFragment.graphql";
import {
  BackButton,
  ContentImage,
  DownloadLink,
  LoadingBlock,
  NamedLink,
} from "components/atomic";

export default function AssetDetailBlock({ data }: Props) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const asset = useMaybeFragment(fragment, data);
  const slug = useRouteSlug();

  // Since we don't have a preview thumbnail for original images,
  // we render a loading spinner instead.
  function renderOriginalImage(downloadUrl: string, altText?: string | null) {
    return (
      <>
        {!loaded && <LoadingBlock />}
        <Image
          alt={altText || ""}
          src={downloadUrl}
          layout="responsive"
          width={1160}
          height={640}
          objectFit="contain"
          objectPosition="left"
          onLoadingComplete={() => setLoaded(true)}
        />
      </>
    );
  }

  return asset ? (
    <Styled.Section className="l-container-wide">
      {slug && (
        <NamedLink
          route="item.files"
          routeParams={{ slug }}
          scroll={false}
          passHref
        >
          <BackButton>Back to Files</BackButton>
        </NamedLink>
      )}
      <Styled.ContentBlock>
        {asset.preview?.storage ? (
          <ContentImage data={asset.preview} />
        ) : asset.downloadUrl && asset.kind === "image" ? (
          renderOriginalImage(asset.downloadUrl, asset.altText)
        ) : asset.kind === "pdf" ? (
          <AssetPDFPreview data={asset} />
        ) : null}
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
      </Styled.ContentBlock>
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
      altText
      preview {
        storage
        ...ContentImageFragment
      }
      ...AssetPDFPreviewFragment
    }
    ... on AssetImage {
      updatedAt
    }
  }
`;
