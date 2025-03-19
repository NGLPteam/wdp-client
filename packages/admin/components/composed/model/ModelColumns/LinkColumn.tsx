import { useTranslation } from "react-i18next";
import { isFunction } from "lodash";
import { NamedLink } from "components/atomic";
import get from "lodash/get";
import { Node, PartialColumnish } from "./types";
import type { AccessorFn, ColumnDef, Row } from "@tanstack/react-table";

type LinkColumnType<T extends Node> = PartialColumnish<T> & {
  route?: string | ((row: Row<T>) => string);
  cellType?: string;
  className?: string;
  accessor?: AccessorFn<T> | string;
  slug?: string;
  id: string;
};

// disableSortBy is getting replaced with enableSorting
const LinkColumn = <T extends Node>({
  route: routeProp,
  cellType = "name",
  className,
  accessor,
  header,
  slug: slugProp,
  id,
  ...props
}: LinkColumnType<T>): ColumnDef<T> => {
  const { t } = useTranslation();

  const accessorKey = typeof accessor === "string" ? accessor : undefined;
  const accessorFn = isFunction(accessor)
    ? accessor
    : (originalRow: T) => get(originalRow, id);

  return {
    header: header ?? t("lists.name_column"),
    id: id ?? "name",
    ...(accessorKey ? { accessorKey } : { accessorFn }),
    meta: {
      cellType,
      className,
    },
    cell: (cell) => {
      const value = cell.getValue<string>();
      const slug = slugProp
        ? (get(cell.row.original, slugProp) as string)
        : null;
      const route =
        typeof routeProp === "function" ? routeProp(cell.row) : routeProp;

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

export default LinkColumn;
