import { graphql, useFragment } from "react-relay";
import CoverImage from "@/components/atomic/images/CoverImage";
import { DetailCoverImageFragment$key } from "@/relay/DetailCoverImageFragment.graphql";
import { getThumbWithFallback } from "@/helpers";

export default function DetailCoverImage({
  data,
}: {
  data?: DetailCoverImageFragment$key | null;
}) {
  const entity = useFragment(fragment, data);

  const thumbnailData = entity ? getThumbWithFallback(entity) : null;

  const { id, title } = entity ?? {};

  return (
    <CoverImage
      maxWidth={225}
      maxHeight={300}
      data={thumbnailData?.thumbnail}
      id={id}
      title={title}
    />
  );
}

const fragment = graphql`
  fragment DetailCoverImageFragment on AnyEntity {
    ... on Collection {
      id
      title
      ...getThumbWithFallbackFragment
    }
    ... on Item {
      id
      title
      ...getThumbWithFallbackFragment
    }
  }
`;
