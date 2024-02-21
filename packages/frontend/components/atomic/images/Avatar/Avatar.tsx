import React from "react";
import Image from "next/legacy/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import * as Styled from "./Avatar.styles";
import { IconFactory } from "components/factories";

const Avatar = ({ url, alt, size = "sm" }: Props) => {
  const imageSize = size === "sm" ? 32 : 60;

  const style = {
    "--Avatar-size": `${pxToRem(imageSize)}`,
    "--Avatar-border-color": size === "sm" ? "none" : "var()",
  } as React.CSSProperties;

  return (
    <Styled.Wrapper style={style}>
      {url && (
        <Image src={url} alt={alt || ""} width={imageSize} height={imageSize} />
      )}
      <IconFactory
        icon={size === "lg" ? "avatar60" : "avatar32"}
        aria-hidden="true"
        role="presentation"
      />
    </Styled.Wrapper>
  );
};

interface Props {
  size?: "sm" | "lg";
  alt?: string | null;
  url?: string | null;
}

export default Avatar;
