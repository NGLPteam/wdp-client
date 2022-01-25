import React from "react";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import { Image, NamedLink } from "components/atomic";
import { ThumbnailColumnCellFragment$key } from "@/relay/ThumbnailColumnCellFragment.graphql";
import CoverPlaceholder from "@wdp/lib/atomic/CoverPlaceholder";

const ThumbnailColumnCell = ({ data }: Props) => {
  const entity = useMaybeFragment(fragment, data);

  const hasImage = entity?.thumbnail?.storage;

  const image = hasImage ? entity?.thumbnail?.image?.png : null;

  return entity ? (
    <NamedLink
      route={entity.__typename === "Collection" ? "collection" : "item"}
      routeParams={{ slug: entity.slug || "" }}
      passHref
    >
      <a
        className="a-link"
        style={{ display: "block", maxHeight: "100%", maxWidth: "100%" }}
      >
        {image && image.url ? (
          <Image
            image={{
              alt: "",
              url: image.url,
              width: image.width || 0,
              height: image.height || 0,
            }}
            objectFit="contain"
            objectPosition="center"
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
