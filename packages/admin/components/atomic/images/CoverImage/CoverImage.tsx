import { graphql } from "react-relay";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { CoverImageFragment$key } from "@/relay/CoverImageFragment.graphql";
import Image from "../Image";

type ImageProps = React.ComponentProps<typeof Image>;

export default function CoverImage({
  data,
  objectFit,
  objectPosition,
  width,
  height,
  className,
}: Props) {
  const image = useMaybeFragment(fragment, data);

  const webp = image?.storage && image?.medium?.webp;

  return webp ? (
    <Image
      data={webp}
      width={width}
      height={height}
      objectFit={objectFit}
      objectPosition={objectPosition}
      className={className}
    />
  ) : null;
}

interface Props {
  data?: CoverImageFragment$key | null;
  objectFit?: ImageProps["objectFit"];
  objectPosition?: ImageProps["objectPosition"];
  width?: number;
  height?: number;
  className?: string;
}

const fragment = graphql`
  fragment CoverImageFragment on ImageAttachment {
    storage
    medium {
      webp {
        ...ImageFragment
      }
    }
  }
`;
