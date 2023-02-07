import { useTranslation } from "react-i18next";
import type { ColumnDef } from "@tanstack/react-table";
import { PartialColumnish, Node } from "./types";

const EmailColumn = <NodeType extends Node>(
  props: PartialColumnish<NodeType> = {}
): ColumnDef<NodeType> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.email_column")}</>,
    id: "email",
    accessorFn: (originalRow: NodeType) => originalRow.email,
    meta: {
      className: "t-truncate",
    },
    ...props,
  };
};

export default EmailColumn;
