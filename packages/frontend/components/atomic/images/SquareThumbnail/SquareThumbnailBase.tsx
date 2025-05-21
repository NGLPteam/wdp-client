import classNames from "classnames";
import Image from "next/legacy/image";
import styles from "./SquareThumbnail.module.css";

export default function SquareThumbnailBase({
  alt,
  url,
  size,
  blurDataURL,
}: BaseProps) {
  return url ? (
    <div
      className={classNames("a-bg-custom20", styles.wrapper)}
      {...(size
        ? {
            style: {
              "--FileThumbnail-size": `${size}px`,
            } as React.CSSProperties,
          }
        : {})}
    >
      <Image
        alt={alt || ""}
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        {...(blurDataURL ? { placeholder: "blur", blurDataURL } : {})}
      />
    </div>
  ) : null;
}

interface BaseProps {
  alt?: string | null;
  url?: string | null;
  size?: number;
  blurDataURL?: string;
}
