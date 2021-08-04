import { formatDate } from "helpers";
import { NamedLink, Image } from "components/atomic";
import React from "react";
import type { Column } from "react-table";

type Node = Record<string, unknown>;

interface Creatable extends Node {
  createdAt?: string;
}

interface Updatable extends Node {
  updatedAt?: string;
}

const createdAt = <NodeType extends Creatable>() => {
  return {
    Header: "Created At",
    id: "createdAt",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.createdAt) return null;
      return formatDate(originalRow.createdAt);
    },
  };
};

const updatedAt = <NodeType extends Updatable>() => {
  return {
    Header: "Updated At",
    id: "updatedAt",
    disableSortBy: true,
    truncate: true,
    accessor: (originalRow: NodeType) => {
      if (!originalRow.updatedAt) return null;
      return formatDate(originalRow.updatedAt);
    },
  };
};

type Accessor<NodeType extends Node> = Column<NodeType>["accessor"];

const name = <NodeType extends Node>({
  route,
  label = "title",
  accessor,
}: {
  route: string;
  label?: string;
  accessor?: any;
}) => {
  return {
    Header: label,
    accessor,
    disableSortBy: true,
    Cell: ({ row, value }: { row: any; value: any }) => {
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
  };
};

const thumbnail = () => {
  return {
    Header: <span className="a-hidden">Thumbnail</span>,
    id: "thumbnail",
    accessor: "thumbnail",
    disableSortBy: true,
    // TODO: Find a way to pass size or view (table/grid) down to a single Cell render
    GridCell: ({ value }: { value: any }) => {
      return value?.image?.png ? (
        <Image
          image={{ ...value?.image?.png, width: 180, height: 180 }}
          objectFit="contain"
        />
      ) : null;
    },
    Cell: ({ value }: { value: any }) => {
      return value?.image?.png ? (
        <Image
          image={{ ...value?.image?.png, width: 50, height: 50 }}
          objectFit="contain"
          objectPosition="center"
        />
      ) : null;
    },
  };
};

const columns = { createdAt, updatedAt, name, thumbnail };

export default columns;
