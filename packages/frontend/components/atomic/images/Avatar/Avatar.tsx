import React from "react";
import Image from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import IconFactory from "@/components/factories/IconFactory";
import styles from "./Avatar.module.css";

const Avatar = ({ url, alt, size = "sm", blurDataURL }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;

  const style = {
    "--Avatar-size": `${pxToRem(imageSize)}`,
    "--Avatar-border-color":
      size === "sm" ? "none" : "var(--color-base-neutral90)",
  } as React.CSSProperties;

  return (
    <div className={styles.wrapper} style={style}>
      {url && (
        <Image
          src={url}
          alt={alt || ""}
          width={imageSize}
          height={imageSize}
          {...(blurDataURL ? { placeholder: "blur", blurDataURL } : {})}
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
  blurDataURL?: string;
}

export default Avatar;
