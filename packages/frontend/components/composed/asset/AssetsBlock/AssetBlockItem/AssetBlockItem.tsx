import classNames from "classnames";
import { graphql, useFragment } from "react-relay";
import { formatDate, formatFileSize } from "@wdp/lib/helpers";
import { useRouteSlug } from "@wdp/lib/routes";
import { DownloadLink, NamedLink } from "components/atomic";
import { AssetBlockItemFragment$key } from "@/relay/AssetBlockItemFragment.graphql";
import AssetThumbnail from "../../AssetThumbnail";
import styles from "./AssetBlockItem.module.css";

export default function AssetBlockItem({ data }: Props) {
  const file = useFragment(fragment, data);
  const slug = useRouteSlug();

  return file ? (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <AssetThumbnail data={file} />
      </div>
      <div className={styles.text}>
        <h4>
          {slug && file.slug ? (
            <NamedLink
              href={`/items/${slug}/files/${file.slug}`}
              scroll={false}
            >
              <span>{file.name}</span>
            </NamedLink>
          ) : (
            file.name
          )}
        </h4>
        <div className={styles.info}>
          {file.kind && <p className="t-label-sm">{file.kind}</p>}
          <ul
            className={classNames("t-copy-lighter t-copy-sm", styles.metadata)}
          >
            {file.updatedAt && (
              <li>{formatDate(file.updatedAt, "MMM d, yyyy")}</li>
            )}
            {file.fileSize && <li>{formatFileSize(file.fileSize)}</li>}
          </ul>
        </div>
        <p className="t-copy-lighter t-copy-sm line-clamp-2">{file.caption}</p>
        {file.downloadUrl && (
          <DownloadLink className="t-label-sm" href={file.downloadUrl} />
        )}
      </div>
    </div>
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
