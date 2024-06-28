import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { CreatableNode, PartialColumnish } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const CreatedAtColumn = <T extends CreatableNode>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.created_at_column")}</>,
    id: "createdAt",
    meta: {
      className: "t-truncate",
    },
    ...(accessorKey
      ? { accessorKey }
      : {
          accessorFn: (originalRow: T) => {
            if (!originalRow.createdAt) return null;
            return originalRow.createdAt;
          },
        }),
    cell: ({ getValue }) => {
      const value = getValue();
      return value ? formatDate(value as string) : null;
    },
    ...props,
  };
};

export default CreatedAtColumn;
