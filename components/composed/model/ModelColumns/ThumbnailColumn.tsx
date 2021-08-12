import React from "react";
import { Column } from "react-table";
import { PartialColumnish, Node } from "./types";
import { Image } from "components/atomic";

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
  return {
    Header: <span className="a-hidden">Thumbnail</span>,
    id: "thumbnail",
    accessor: (row: NodeType) => row.thumbnail,
    disableSortBy: true,
    Cell: ({ grid = false, value }: { grid: boolean; value: Thumbnail }) => {
      const { image } = value;
      if (!image || !image.png) return null;
      const width = grid ? 180 : 50;
      const height = grid ? 180 : 50;
      const objectFit = "contain";
      const objectPosition = grid ? undefined : "center";

      const png = image.png;

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
