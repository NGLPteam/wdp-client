import React from "react";
import { useTranslation } from "react-i18next";
import { FileIconFactory } from "@wdp/lib/factories";
import { SquareThumbnailBase } from "../SquareThumbnail";
import * as Styled from "./FileThumbnail.styles";

export default function FileThumbnail({ alt, url, kind, size }: BaseProps) {
  const { t } = useTranslation();

  return (
    <Styled.Figure
      className={url ? "a-bg-neutral90" : "a-bg-custom10"}
      $size={size}
    >
      {url && (
        <Styled.ImageWrapper>
          <SquareThumbnailBase alt={alt} url={url} size={size || 120} />
        </Styled.ImageWrapper>
      )}
      <FileIconFactory kind={kind} title={t(`asset.${kind}`)} />
    </Styled.Figure>
  );
}

interface BaseProps {
  alt?: string | null;
  url?: string | null;
  kind?: string;
  size?: number;
}
