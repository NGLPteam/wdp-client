import React from "react";
import Image from "next/image";
import { pxToRem } from "@wdp/lib/theme/functions";
import CoverPlaceholder from "@wdp/lib/atomic/CoverPlaceholder";
import * as Styled from "./CoverImage.styles";

export default function CoverImageBase({
  alt,
  url,
  width,
  height,
  maxWidth,
  maxHeight,
  id,
  title,
}: BaseProps) {
  const style = {
    maxWidth: pxToRem(maxWidth || 225),
    maxHeight: pxToRem(maxHeight || 300),
  };

  return url ? (
    <Styled.Figure style={style}>
      <Image
        alt={alt || ""}
        src={url}
        width={width || 0}
        height={height || 0}
        layout="intrinsic"
      />
    </Styled.Figure>
  ) : (
    <Styled.Figure style={style}>
      <CoverPlaceholder seed={id || "fallback-placeholder"} title={title} />
    </Styled.Figure>
  );
}

interface BaseProps {
  url?: string | null;
  alt?: string | null;
  width?: number | null;
  height?: number | null;
  maxWidth?: number;
  maxHeight?: number;
  id?: string;
  title?: string;
}
