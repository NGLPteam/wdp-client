import { useTranslation } from "react-i18next";
import isFunction from "lodash/isFunction";
import get from "lodash/get";
import { NamedLink } from "components/atomic";
import { Node } from "./types";
import type { AccessorFn, ColumnDef } from "@tanstack/react-table";

type NameColumnType<T extends Node> = Partial<ColumnDef<T>> & {
  route?: string | ((node: T) => string);
  cellType?: string;
  className?: string;
  accessor?: AccessorFn<T> | string;
  query?: Record<string, string>;
  slugKey?: string;
};

// disableSortBy is getting replaced with enableSorting
const NameColumn = <T extends Node>(
  {
    route,
    query,
    cellType,
    className,
    accessor,
    slugKey,
    ...props
  }: NameColumnType<T> = {
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
      const slug = slugKey
        ? (get(info.row?.original, slugKey) as string)
        : info.row?.original?.slug;
      const value = info.getValue<string>();

      const computedRoute =
        typeof route === "function" ? route(info.row?.original) : route;

      return computedRoute && slug ? (
        <NamedLink
          route={computedRoute}
          routeParams={{ slug }}
          query={query}
          passHref
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={`t-weight-md a-link ${className}`}>{value}</a>
        </NamedLink>
      ) : (
        value
      );
    },
    ...props,
  };
};

export default NameColumn;
