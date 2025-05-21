import { graphql, useFragment } from "react-relay";
import CoverImage from "@/components/atomic/images/CoverImage";
import { DetailCoverImageFragment$key } from "@/relay/DetailCoverImageFragment.graphql";

export default function DetailCoverImage({
  data,
}: {
  data?: DetailCoverImageFragment$key | null;
}) {
  const { thumbnail, ...imageProps } = useFragment(fragment, data) ?? {};

  return (
    <CoverImage
      maxWidth={225}
      maxHeight={300}
      data={thumbnail}
      {...imageProps}
    />
  );
}

const fragment = graphql`
  fragment DetailCoverImageFragment on AnyEntity {
    ... on Collection {
      id
      title
      thumbnail {
        ...CoverImageFragment
      }
    }
    ... on Item {
      id
      title
      thumbnail {
        ...CoverImageFragment
      }
    }
  }
`;
