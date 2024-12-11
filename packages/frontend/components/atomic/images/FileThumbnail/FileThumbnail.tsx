import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { FileIconFactory } from "@wdp/lib/factories";
import { SquareThumbnailBase } from "../SquareThumbnail";
import styles from "./FileThumbnail.module.css";

export default function FileThumbnail({ alt, url, kind, size }: BaseProps) {
  const { t } = useTranslation();

  return (
    <figure
      className={classNames(styles.figure, {
        "a-bg-neutral90": !!url,
        "a-bg-custom10": !url,
      })}
      {...(size
        ? {
            style: {
              "--FileThumbnail-size": `${size}px`,
            } as React.CSSProperties,
          }
        : {})}
    >
      {url && (
        <span className={styles.imageWrapper}>
          <SquareThumbnailBase alt={alt} url={url} size={size || 120} />
        </span>
      )}
      <FileIconFactory kind={kind} title={t(`asset.${kind}`)} />
    </figure>
  );
}

interface BaseProps {
  alt?: string | null;
  url?: string | null;
  kind?: string;
  size?: number;
}
