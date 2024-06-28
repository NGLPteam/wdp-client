import { useTranslation } from "react-i18next";
import { formatDate } from "@wdp/lib/helpers";
import { UpdatableNode, PartialColumnish } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const UpdatedAtColumn = <T extends UpdatableNode>(
  props: PartialColumnish<T> = {
    enableSorting: false,
  },
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.updated_at_column")}</>,
    id: "updatedAt",
    meta: {
      className: "t-truncate",
    },
    ...(accessorKey
      ? { accessorKey }
      : {
          accessorFn: (originalRow: T) => {
            if (!originalRow.updatedAt) return null;
            return formatDate(originalRow.updatedAt);
          },
        }),
    ...props,
  };
};

export default UpdatedAtColumn;
