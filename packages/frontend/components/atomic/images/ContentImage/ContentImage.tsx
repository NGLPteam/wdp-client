import { useFragment, graphql } from "react-relay";
import { ContentImageFragment$key } from "@/relay/ContentImageFragment.graphql";
import { generateSrcSet, sizes } from "@/helpers/generateSrcSet";
import styles from "./ContentImage.module.css";
import type { ImageSize } from "types/graphql-schema";

export default function ContentImage({ data, loading }: Props) {
  const imageData = useFragment(fragment, data);

  const image = imageData?.large.webp;

  if (!image || !image.url) return null;

  return (
    <div className={styles.wrapper}>
      <img
        alt={image.alt ?? ""}
        src={image.url}
        srcSet={generateSrcSet(
          imageData as unknown as Record<string, ImageSize>,
        )}
        sizes={sizes}
        width={image.width ?? undefined}
        height={image.height ?? undefined}
        loading={loading ?? "lazy"}
        decoding="async"
      />
    </div>
  );
}

interface Props {
  data?: ContentImageFragment$key | null;
  loading?: "eager" | "lazy";
}

const fragment = graphql`
  fragment ContentImageFragment on ImageAttachment {
    large {
      webp {
        alt
        url
        width
        height
      }
    }
    medium {
      webp {
        url
        width
      }
    }
    small {
      webp {
        url
        width
      }
    }
  }
`;
