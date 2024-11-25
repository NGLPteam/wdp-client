import React from "react";
import Image from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import { IconFactory } from "components/factories";
import styles from "./Avatar.module.css";

const Avatar = ({ url, alt, size = "sm" }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;

  const style = {
    "--Avatar-size": `${pxToRem(imageSize)}`,
    "--Avatar-border-color": size === "sm" ? "none" : "var()",
  } as React.CSSProperties;

  return (
    <div className={styles.wrapper} style={style}>
      {url && (
        <Image src={url} alt={alt || ""} width={imageSize} height={imageSize} />
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
}

export default Avatar;
