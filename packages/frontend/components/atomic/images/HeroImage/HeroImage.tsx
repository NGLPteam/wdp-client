import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import { HeroImageFragment$key } from "@/relay/HeroImageFragment.graphql";
import { HeroImageMetadataFragment$key } from "@/relay/HeroImageMetadataFragment.graphql";
import HeroImageBase from "./HeroImageBase";

export default function HeroImage({ data, metadata }: Props) {
  const imageData = useMaybeFragment(fragment, data);

  const imageMetadata = useMaybeFragment(metadataFragment, metadata);

  if (!imageData) return null;

  const { image, placeholder } = imageData;

  return image?.webp?.url ? (
    <HeroImageBase
      alt={imageMetadata?.alt || ""}
      url={image.webp.url}
      {...(placeholder?.webp?.url && {
        placeholder: "blur",
        blurDataURL: placeholder.webp.url,
      })}
    />
  ) : null;
}

interface Props {
  data?: HeroImageFragment$key | null;
  metadata?: HeroImageMetadataFragment$key | null;
}

const fragment = graphql`
  fragment HeroImageFragment on ImageAttachment {
    image: hero {
      webp {
        url
      }
    }
    placeholder: thumb {
      webp {
        url
      }
    }
  }
`;

const metadataFragment = graphql`
  fragment HeroImageMetadataFragment on ImageMetadata {
    alt
  }
`;
