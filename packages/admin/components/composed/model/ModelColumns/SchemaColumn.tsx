import { useTranslation } from "react-i18next";
import { PartialColumnish, SchemaVersionableNode } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const SchemaColumn = <T extends Partial<SchemaVersionableNode>>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.schema_column")}</>,
    id: "schema",
    meta: {
      className: "t-truncate",
    },
    ...(accessorKey
      ? { accessorKey }
      : {
          accessorFn: (originalRow: T) => {
            return `${originalRow?.schemaVersion?.name}`;
          },
        }),
    ...props,
  };
};

export default SchemaColumn;
