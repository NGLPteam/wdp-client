import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SquareThumbnailBase } from "../SquareThumbnail";
import * as Styled from "./FileThumbnail.styles";
import { IconFactory } from "components/factories";

export default function FileThumbnail({ alt, url, kind, size }: BaseProps) {
  const { t } = useTranslation();

  const icon = useMemo(() => {
    switch (kind) {
      case "audio":
        return <IconFactory icon="audio32" title={t("asset.audio")} />;

      case "image":
        return <IconFactory icon="image32" title={t("asset.image")} />;

      case "video":
        return <IconFactory icon="video32" title={t("asset.video")} />;

      default:
        return <IconFactory icon="text32" title={t("asset.file")} />;
    }
  }, [kind, t]);

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
      {icon}
    </Styled.Figure>
  );
}

interface BaseProps {
  alt?: string | null;
  url?: string | null;
  kind?: string;
  size?: number;
}
