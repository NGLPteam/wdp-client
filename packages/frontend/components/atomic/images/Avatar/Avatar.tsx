import { pxToRem } from "@wdp/lib/theme/functions";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Avatar.module.css";

const Avatar = ({ url, alt, size = "sm", loading }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;

  const style = {
    "--Avatar-size": `${pxToRem(imageSize)}`,
    "--Avatar-border-color":
      size === "sm" ? "none" : "var(--color-base-neutral90)",
  } as React.CSSProperties;

  return (
    <div className={styles.wrapper} style={style}>
      {url && (
        <img
          src={url}
          alt={alt || ""}
          width={imageSize}
          height={imageSize}
          loading={loading}
        />
      )}
      <IconFactory
        icon={size === "lg" ? "avatar60" : "avatar32"}
        aria-hidden="true"
        role="presentation"
      />
    </div>
  );
};

interface Props {
  size?: "sm" | "lg";
  alt?: string | null;
  url?: string | null;
  loading?: "eager" | "lazy";
}

export default Avatar;
