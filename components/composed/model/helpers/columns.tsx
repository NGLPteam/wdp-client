import { formatDate } from "helpers";
import { NamedLink, Image } from "components/atomic";
import React from "react";
import type { Column } from "react-table";
import { CellProps } from "react-table";

type Node = Record<string, unknown> & {
  slug: string;
};

interface CreatableNode extends Node {
  createdAt?: string | null;
}

interface UpdatableNode extends Node {
  updatedAt?: string | null;
}

interface Png {
  alt: string;
  url: string;
}

interface Image {
  png?: Png | null;
}

interface Thumbnail {
  image?: Image | null;
}

interface ThumbnailNode extends Node {
  thumbnail?: Thumbnail | null;
}

// Use if the column requires an accessor to be passed in.
type RequiredColumnish<T extends Node> = Column<T>;

// Use if the column is self sufficient
type PartialColumnish<T extends Node> = Partial<RequiredColumnish<T>>;

const createdAt = <NodeType extends CreatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    Header: "Created At",
    id: "createdAt",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return formatDate(originalRow.createdAt);
    },
    ...props,
  };
};

const updatedAt = <NodeType extends UpdatableNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    Header: "Updated At",
    id: "updatedAt",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
    ...props,
  };
};

type NameColumn<T extends Node> = RequiredColumnish<T> & { route: string };
const name = <NodeType extends Node>({
  route,
  ...props
}: NameColumn<NodeType>): Column<NodeType> => {
  return {
    Header: "Name",
    id: "Name",
    disableSortBy: true,
    Cell: ({ row, value }: CellProps<NodeType>) => {
      if (!row?.original?.slug) return value;
      return (
        <NamedLink
          route={route}
          routeParams={{ slug: row.original.slug }}
          passHref
        >
          <a className="t-weight-md a-link">{value}</a>
        </NamedLink>
      );
    },
    ...props,
  };
};

const thumbnail = <NodeType extends ThumbnailNode>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  return {
    Header: <span className="a-hidden">Thumbnail</span>,
    id: "thumbnail",
    accessor: (row: NodeType) => row.thumbnail,
    disableSortBy: true,
    Cell: ({ grid = false, value }: { grid: boolean; value: Thumbnail }) => {
      if (!value || !value.image || !value.image.png) return null;
      const width = grid ? 180 : 50;
      const height = grid ? 180 : 50;
      const objectFit = "contain";
      const objectPosition = grid ? undefined : "center";

      const png = value.image.png;

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

const columns = { createdAt, updatedAt, name, thumbnail };

export default columns;
