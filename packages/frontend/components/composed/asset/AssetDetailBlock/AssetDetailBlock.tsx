"use client";

import { graphql, useFragment } from "react-relay";
import classNames from "classnames";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useParams } from "next/navigation";
import {
  BackButton,
  ContentImage,
  DownloadLink,
  NamedLink,
} from "components/atomic";
import { AssetDetailBlockFragment$key } from "@/relay/AssetDetailBlockFragment.graphql";
import AssetPDFPreview from "../AssetPDFPreview";
import styles from "./AssetDetailBlock.module.css";

export default function AssetDetailBlock({ data }: Props) {
  const asset = useFragment(fragment, data);
  const { slug } = useParams();

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
          <img
            alt={asset.altText ?? ""}
            src={asset.downloadUrl}
            width={1160}
            height={640}
            className={styles.image}
            loading="eager"
            decoding="async"
          />
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
