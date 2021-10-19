import React from "react";
import { Column, CellProps } from "react-table";
import { Image, NamedLink } from "components/atomic";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";

export interface Png {
  alt: string;
  url: string;
}

export interface Image {
  png?: Png | null;
}

export interface Thumbnail {
  image?: Image | null;
}

type ThumbnailColumn<T extends Node> = PartialColumnish<T> & {
  thumbnail?: Thumbnail | null;
  route?: string;
};

const ThumbnailColumn = <NodeType extends Node>({
  route,
  ...props
}: ThumbnailColumn<NodeType>): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <span className="a-hidden">{t("columns.thumbnail")}</span>,
    id: "thumbnail",
    accessor: (thumbnail: NodeType) => thumbnail?.image,
    disableSortBy: true,
    Cell: ({ grid = false, value, row }: CellProps<NodeType>) => {
      if (!value || !value?.png) return null;
      const { png } = value;
      const width = grid ? 180 : 50;
      const height = grid ? 180 : 50;
      const objectFit = "contain";
      const objectPosition = grid ? undefined : "center";

      return png && row.original.slug && route ? (
        <NamedLink
          route={route}
          routeParams={{ slug: row.original.slug }}
          passHref
        >
          <a className="a-link">
            <Image
              image={{ ...png, width, height }}
              objectFit={objectFit}
              objectPosition={objectPosition}
            />
          </a>
        </NamedLink>
      ) : png ? (
        <Image
          image={{ ...png, width, height }}
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      ) : null;
    },
    ...props,
  };
};

export default ThumbnailColumn;
