import React from "react";
import { CellProps, Column } from "react-table";
import { NamedLink } from "components/atomic";
import { useTranslation } from "react-i18next";
import { RequiredColumnish, Node } from "./types";

type NameColumn<T extends Node> = RequiredColumnish<T> & { route?: string };

const NameColumn = <NodeType extends Node>({
  route,
  cellType = "name",
  ...props
}: NameColumn<NodeType>): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.name_column")}</>,
    id: "name",
    disableSortBy: true,
    cellType: cellType,
    Cell: ({ row, value }: CellProps<NodeType>) => {
      return route && row?.original?.slug ? (
        <NamedLink
          route={route}
          routeParams={{ slug: row.original.slug }}
          passHref
        >
          <a className="t-weight-md a-link">{value}</a>
        </NamedLink>
      ) : (
        value
      );
    },
    ...props,
  };
};

export default NameColumn;
