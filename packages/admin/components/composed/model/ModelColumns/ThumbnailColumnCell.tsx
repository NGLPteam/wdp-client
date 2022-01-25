import React from "react";
import { graphql } from "react-relay";
import CoverPlaceholder from "@wdp/lib/atomic/CoverPlaceholder";
import { useMaybeFragment } from "hooks";
import { Image, NamedLink } from "components/atomic";
import { ThumbnailColumnCellFragment$key } from "@/relay/ThumbnailColumnCellFragment.graphql";

const ThumbnailColumnCell = ({ grid, data }: Props) => {
  const entity = useMaybeFragment(fragment, data);

  const hasImage = entity?.thumbnail?.storage;

  const image = hasImage ? entity?.thumbnail?.image?.png : null;

  const objectPosition = grid ? "bottom left" : "top right";

  const size = grid ? 180 : 50;

  return entity ? (
    <NamedLink
      route={entity.__typename === "Collection" ? "collection" : "item"}
      routeParams={{ slug: entity.slug || "" }}
      passHref
    >
      <a
        className="a-link"
        style={{
          display: "block",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      >
        {image && image.url ? (
          <Image
            image={{
              alt: "",
              url: image.url,
              width: size,
              height: size,
            }}
            objectFit="contain"
            objectPosition={objectPosition}
          />
        ) : (
          <CoverPlaceholder
            title={entity.title || ""}
            seed={entity.id || entity.slug || ""}
            style={{ maxHeight: "100%" }}
          />
        )}
      </a>
    </NamedLink>
  ) : null;
};

interface Props {
  data?: ThumbnailColumnCellFragment$key;
  grid?: boolean;
}

export default ThumbnailColumnCell;

const fragment = graphql`
  fragment ThumbnailColumnCellFragment on Entity {
    __typename
    title
    thumbnail {
      storage
      image: medium {
        png {
          url
          height
          width
          alt
        }
      }
    }
    ... on Sluggable {
      slug
    }
    ... on Node {
      id
    }
  }
`;
