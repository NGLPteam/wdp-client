import React from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import Image from "next/image";
import { graphql } from "react-relay";
import { pxToRem } from "@wdp/lib/theme/functions";
import { CoverPlaceholder } from "@wdp/lib/atomic";
import * as Styled from "./CoverImage.styles";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";

/* We can't use objectFit contain because of the drop shadow */
export default function CoverImage({
  data,
  maxWidth,
  maxHeight,
  title,
  id,
}: ImageProps | PlaceholderProps) {
  const imageData = useMaybeFragment(fragment, data);
  const image = imageData?.image.webp;
  const style = {
    "--CoverImage-max-width": pxToRem(maxWidth),
    "--CoverImage-max-height": pxToRem(maxHeight),
  } as React.CSSProperties;

  if (!image || !image.url) {
    return (
      <Styled.Figure style={style}>
        <CoverPlaceholder
          seed={id || "fallback-placeholder"}
          title={title}
          maxWidth={maxWidth}
          maxHeight={maxHeight}
        />
      </Styled.Figure>
    );
  }

  return (
    <Styled.Figure style={style}>
      <Image
        layout="intrinsic"
        src={image.url}
        alt={image.alt || ""}
        width={image.width || 0}
        height={image.height || 0}
      />
    </Styled.Figure>
  );
}

interface ImageProps {
  data?: CoverImageFragment$key | null;
  maxWidth: number;
  maxHeight: number;
  title?: string;
  id?: string;
}

// If a placeholder fallback is requested, this component requires a title and id to
// generate the placeholder
interface PlaceholderProps {
  /* Image fragment */
  data?: CoverImageFragment$key | null;
  maxWidth: number;
  maxHeight: number;
  title: string;
  id: string;
}

const fragment = graphql`
  fragment CoverImageFragment on ImageAttachment {
    image: large {
      webp {
        url
        alt
        width
        height
      }
    }
  }
`;
