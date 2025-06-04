import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";
import CoverPlaceholder from "./CoverPlaceholder";
import styles from "./CoverImage.module.css";

export default function CoverImage({
  data,
  maxWidth,
  maxHeight,
  ...props
}: ImageProps | PlaceholderProps) {
  const { image } = useMaybeFragment(fragment, data) ?? {};

  const style = {
    "--CoverImage-max-width": pxToRem(maxWidth),
    "--CoverImage-max-height": pxToRem(maxHeight),
  } as React.CSSProperties;

  if (!image || !image.webp.url) {
    return (
      <figure className={styles.figure} style={style}>
        <CoverPlaceholder
          seed={"id" in props && props.id ? props.id : "fallback-placeholder"}
          title={"title" in props ? props.title : undefined}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        />
      </figure>
    );
  }

  return (
    <figure className={styles.figure} style={style}>
      <img
        src={image.webp.url}
        alt={image.webp.alt ?? ""}
        width={image.webp.width || maxWidth}
        height={image.webp.height || maxHeight}
        loading={"loading" in props && props.loading ? props.loading : "lazy"}
        decoding="async"
      />
    </figure>
  );
}

interface ImageProps {
  data?: CoverImageFragment$key | null;
  maxWidth: number;
  maxHeight: number;
  loading?: "eager" | "lazy";
}

// If a placeholder fallback is requested, this component requires a title and id to
// generate the placeholder
interface PlaceholderProps {
  /* Image fragment */
  data?: CoverImageFragment$key | null;
  maxWidth: number;
  maxHeight: number;
  title: string;
  id: string;
}

const fragment = graphql`
  fragment CoverImageFragment on ImageAttachment {
    image: medium {
      webp {
        url
        alt
        width
        height
      }
    }
  }
`;
