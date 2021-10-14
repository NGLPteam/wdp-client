import React from "react";
import { CellProps, Column } from "react-table";
import { NamedLink } from "components/atomic";
import { useTranslation } from "react-i18next";
import { RequiredColumnish, Node } from "./types";

type NameColumn<T extends Node> = RequiredColumnish<T> & { route: string };

const NameColumn = <NodeType extends Node>({
  route,
  ...props
}: NameColumn<NodeType>): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("columns.name")}</>,
    id: "name",
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
