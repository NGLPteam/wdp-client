import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { CreatableNode, PartialColumnish } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const EndedAtColumn = <T extends CreatableNode>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.ended_at_column")}</>,
    id: "endedAt",
    meta: {
      className: "t-truncate",
    },
    ...(accessorKey
      ? { accessorKey }
      : {
          accessorFn: (originalRow: T) => {
            if (!originalRow.endedAt) return null;
            return originalRow.endedAt;
          },
        }),
    cell: ({ getValue }) => {
      const value = getValue();
      return value ? formatDate(value as string) : null;
    },
    ...props,
  };
};

export default EndedAtColumn;
