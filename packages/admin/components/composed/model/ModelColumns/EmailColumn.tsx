import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import { getAccessorProps } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

const EmailColumn = <T extends Node>(
  props: PartialColumnish<T> = {},
): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.email_column")}</>,
    id: "email",
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T) => originalRow.email }),
    meta: {
      className: "t-truncate",
    },
    ...props,
  };
};

export default EmailColumn;
