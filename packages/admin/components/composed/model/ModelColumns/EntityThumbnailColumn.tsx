import { graphql, readInlineData } from "react-relay";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import CoverPlaceholder from "@wdp/lib/atomic/CoverPlaceholder";
import { PartialColumnish, Node } from "./types";
import { EntityThumbnailColumnFragment$key } from "@/relay/EntityThumbnailColumnFragment.graphql";
import { ImageLink, CoverImage } from "components/atomic";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & EntityThumbnailColumnFragment$key;

const EntityThumbnailColumn = <T extends Node>(
  props: Props<T> = {}
): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <span className="a-hidden">{t("lists.thumbnail")}</span>,
    id: "thumbnail",
    // By default, the thumbnail fragment should be on the row root
    accessorFn: (originalRow: T | Row) => originalRow,
    enableSorting: false,
    cell: (info) => {
      const value = info.getValue() as EntityThumbnailColumnFragment$key;
      const grid = false; // info.getContext()?.table.options.meta?.grid;
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
