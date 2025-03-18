import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { CreatableNode, PartialColumnish } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const BeganAtColumn = <T extends CreatableNode>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.began_at_column")}</>,
    id: "beganAt",
    meta: {
      className: "t-truncate",
    },
    ...(accessorKey
      ? { accessorKey }
      : {
          accessorFn: (originalRow: T) => {
            if (!originalRow.beganAt) return null;
            return originalRow.beganAt;
          },
        }),
    cell: ({ getValue }) => {
      const value = getValue();
      return value ? formatDate(value as string) : null;
    },
    ...props,
  };
};

export default BeganAtColumn;
