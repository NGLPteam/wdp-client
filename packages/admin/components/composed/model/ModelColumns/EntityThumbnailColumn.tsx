import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import CoverPlaceholder from "@wdp/lib/atomic/CoverPlaceholder";
import { ImageLink, CoverImage } from "components/atomic";
import { EntityThumbnailColumnFragment$key } from "@/relay/EntityThumbnailColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps, hasFragments } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & EntityThumbnailColumnFragment$key;

const EntityThumbnailColumn = <T extends Node>(
  props: Props<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <span className="a-hidden">{t("lists.thumbnail")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    enableSorting: false,
    cell: (info) => {
      const value = info.getValue<Row>();
      const grid = false;

      if (!hasFragments(value)) return <></>;

      const entity = readInlineData(fragment, value);

      const objectPosition = grid ? "bottom left" : "top right";

      const size = grid ? 180 : 50;

      return entity ? (
        <ImageLink
          route={entity.__typename === "Collection" ? "collection" : "item"}
          routeParams={{ slug: entity.slug || "" }}
        >
          {entity.thumbnail?.storage ? (
            <CoverImage
              data={entity.thumbnail}
              objectFit="contain"
              objectPosition={objectPosition}
              width={size}
              height={size}
            />
          ) : (
            <CoverPlaceholder
              title={entity.title || ""}
              seed={entity.id || ""}
              style={{ maxHeight: "100%" }}
            />
          )}
        </ImageLink>
      ) : null;
    },
    meta: {
      cellType: "thumbnail",
    },
    ...props,
  };
};

export default EntityThumbnailColumn;

const fragment = graphql`
  fragment EntityThumbnailColumnFragment on Entity @inline {
    __typename
    title
    thumbnail {
      storage
      ...CoverImageFragment
    }
    ... on Node {
      id
    }
    ... on Sluggable {
      slug
    }
  }
`;
