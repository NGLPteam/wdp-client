import { CellProps, Column } from "react-table";
import { RequiredColumnish, Node } from "./types";
import { NamedLink } from "components/atomic";
import React from "react";

type NameColumn<T extends Node> = RequiredColumnish<T> & { route: string };

const NameColumn = <NodeType extends Node>({
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

export default NameColumn;
