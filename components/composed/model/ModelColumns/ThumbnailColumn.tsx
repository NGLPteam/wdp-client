import React from "react";
import { Column } from "react-table";
import { Image } from "components/atomic";
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

export interface ThumbnailNode extends Node {
  thumbnail?: Thumbnail | null;
}
const ThumbnailColumn = <NodeType extends ThumbnailNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <span className="a-hidden">{t("columns.thumbnail")}</span>,
    id: "thumbnail",
    accessor: (row: NodeType) => row?.thumbnail?.image,
    disableSortBy: true,
    Cell: ({ grid = false, value }: { grid: boolean; value: Image }) => {
      if (!value || !value?.png) return null;
      const { png } = value;
      const width = grid ? 180 : 50;
      const height = grid ? 180 : 50;
      const objectFit = "contain";
      const objectPosition = grid ? undefined : "center";

      return png ? (
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
