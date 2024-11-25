import * as React from "react";
import Image from "next/legacy/image";
import styles from "./ContentImage.module.css";

type ImageProps = React.ComponentProps<typeof Image>;

export default function ContentImageBase({
  alt,
  url,
  width,
  height,
  ...imageProps
}: BaseProps) {
  return url ? (
    <div className={styles.wrapper}>
      <Image
        alt={alt || ""}
        src={url}
        width={width || 0}
        height={height || 0}
        layout="responsive"
        {...imageProps}
      />
    </div>
  ) : null;
}

interface BaseProps extends Pick<ImageProps, "placeholder" | "blurDataURL"> {
  alt?: string | null;
  url?: string | null;
  width?: number | null;
  height?: number | null;
}
