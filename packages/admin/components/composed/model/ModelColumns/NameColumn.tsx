import { useTranslation } from "react-i18next";
import { isFunction } from "lodash";
import { NamedLink } from "components/atomic";
import { Node } from "./types";
import type { AccessorFn, ColumnDef } from "@tanstack/react-table";

type NameColumnType<T extends Node> = Partial<ColumnDef<T>> & {
  route?: string;
  cellType?: string;
  className?: string;
  accessor?: AccessorFn<T> | string;
};

// disableSortBy is getting replaced with enableSorting
const NameColumn = <NodeType extends Node>(
  {
    route,
    cellType,
    className,
    accessor,
    ...props
  }: NameColumnType<NodeType> = {
    cellType: "name",
  },
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  const accessorKey = typeof accessor === "string" ? accessor : undefined;
  const accessorFn = isFunction(accessor) ? accessor : undefined;

  return {
    header: t("lists.name_column"),
    id: "name",
    accessorKey,
    accessorFn,
    meta: {
      cellType,
      className,
    },
    cell: (info) => {
      const slug = info.row?.original?.slug;
      const value = info.getValue() as string;

      return route && slug ? (
        <NamedLink route={route} routeParams={{ slug }} passHref>
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
