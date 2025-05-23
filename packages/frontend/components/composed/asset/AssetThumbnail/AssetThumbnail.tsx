import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { useRouteSlug } from "@wdp/lib/routes";
import { FileThumbnail, NamedLink } from "components/atomic";
import { AssetThumbnailFragment$key } from "@/relay/AssetThumbnailFragment.graphql";
import styles from "./AssetThumbnail.module.css";

export default function AssetThumbnail({ data }: Props) {
  const asset = useMaybeFragment(fragment, data);
  const image = asset?.preview?.storage ? asset.preview.image?.webp : null;
  const slug = useRouteSlug();

  function renderThumbnail() {
    return asset ? (
      <FileThumbnail
        alt={image && asset.altText}
        url={image?.url}
        kind={asset.kind}
      />
    ) : null;
  }

  return asset?.slug && slug ? (
    <NamedLink
      className={styles.imageLink}
      href={`/items/${slug}/files/${asset.slug}`}
    >
      {renderThumbnail()}
    </NamedLink>
  ) : (
    renderThumbnail()
  );
}

interface Props {
  data?: AssetThumbnailFragment$key | null;
}

const fragment = graphql`
  fragment AssetThumbnailFragment on Asset {
    kind
    slug
    altText
    preview {
      storage
      image: small {
        webp {
          alt
          url
        }
      }
    }
  }
`;
