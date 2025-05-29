import classNames from "classnames";
import styles from "./SquareThumbnail.module.css";

export default function SquareThumbnailBase({
  alt,
  url,
  size,
  loading,
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
      <img
        alt={alt || ""}
        src={url}
        className={styles.img}
        loading={loading ?? "lazy"}
      />
    </div>
  ) : null;
}

interface BaseProps {
  alt?: string | null;
  url?: string | null;
  size?: number;
  loading?: "eager" | "lazy";
}
