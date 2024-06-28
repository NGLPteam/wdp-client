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
const NameColumn = <T extends Node>(
  { route, cellType, className, accessor, ...props }: NameColumnType<T> = {
    cellType: "name",
  },
): ColumnDef<T> => {
  const { t } = useTranslation();

  const accessorKey = typeof accessor === "string" ? accessor : undefined;
  const accessorFn = isFunction(accessor) ? accessor : undefined;

  return {
    header: t("lists.name_column"),
    id: "name",
    ...(accessorKey ? { accessorKey } : { accessorFn }),
    meta: {
      cellType,
      className,
    },
    cell: (info) => {
      const slug = info.row?.original?.slug;
      const value = info.getValue<string>();

      return route && slug ? (
        <NamedLink route={route} routeParams={{ slug }} passHref>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
