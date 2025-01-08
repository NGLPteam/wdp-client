"use client";

import { useState } from "react";
import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import Image from "next/legacy/image";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useParams } from "next/navigation";
import {
  BackButton,
  ContentImage,
  DownloadLink,
  LoadingBlock,
  NamedLink,
} from "components/atomic";
import { AssetDetailBlockFragment$key } from "@/relay/AssetDetailBlockFragment.graphql";
import AssetPDFPreview from "../AssetPDFPreview";
import styles from "./AssetDetailBlock.module.css";

export default function AssetDetailBlock({ data }: Props) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const asset = useFragment(fragment, data);
  const { slug } = useParams();

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
    <section className={classNames("l-container-wide", styles.section)}>
      {slug && (
        <NamedLink href={`/items/${slug}/files`}>
          <BackButton as="div">Back to Files</BackButton>
        </NamedLink>
      )}
      <div className={styles.content}>
        {asset.preview?.storage ? (
          <ContentImage data={asset.preview} />
        ) : asset.downloadUrl && asset.kind === "image" ? (
          renderOriginalImage(asset.downloadUrl, asset.altText)
        ) : asset.kind === "pdf" ? (
          <AssetPDFPreview data={asset} />
        ) : null}
        <h3>{asset.name}</h3>
        <div className={styles.info}>
          <p className="t-label-lg">{asset.kind}</p>
          <ul className="t-copy-lighter">
            {asset.fileSize && <li>{formatFileSize(asset.fileSize)}</li>}
            {asset.updatedAt && (
              <li>{formatDate(asset.updatedAt, "MMM d, yyyy")}</li>
            )}
          </ul>
        </div>
        {asset.caption && <div className="t-copy-light">{asset.caption}</div>}
      </div>
      {asset.downloadUrl && <DownloadLink href={asset.downloadUrl} />}
    </section>
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
