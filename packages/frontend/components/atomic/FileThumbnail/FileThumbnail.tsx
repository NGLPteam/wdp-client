import React, { useMemo } from "react";
import Image from "next/image";
import * as Styled from "./FileThumbnail.styles";
import { IconFactory } from "components/factories";

export default function FileThumbnail({ alt, url, kind }: BaseProps) {
  const icon = useMemo(() => {
    switch (kind) {
      case "audio":
        return <IconFactory icon="audio32" />;

      case "image":
        return <IconFactory icon="image32" />;

      case "video":
        return <IconFactory icon="video32" />;

      default:
        return <IconFactory icon="text32" />;
    }
  }, [kind]);

  return (
    <Styled.Figure className={url ? "a-bg-neutral90" : "a-bg-custom10"}>
      {url && (
        <Styled.ImageWrapper>
          <Image
            alt={alt || ""}
            src={url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
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
}
