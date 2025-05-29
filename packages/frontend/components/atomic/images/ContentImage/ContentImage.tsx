import { useFragment } from "react-relay";
import { graphql } from "react-relay";
import { ContentImageFragment$key } from "@/relay/ContentImageFragment.graphql";
import styles from "./ContentImage.module.css";

export default function ContentImage({ data, loading }: Props) {
  const { image: imageData } = useFragment(fragment, data) ?? {};

  const image = imageData?.webp;

  if (!image || !image.url) return null;

  return (
    <div className={styles.wrapper}>
      <img
        alt={image.alt ?? ""}
        src={image.url}
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
    image: large {
      webp {
        alt
        url
        width
        height
      }
    }
  }
`;
