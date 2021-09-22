import { useTranslation } from "react-i18next";
import { Column } from "react-table";
import { PartialColumnish, Node } from "./types";

const EmailColumn = <NodeType extends Node>(
  props: PartialColumnish<NodeType> = {}
): Column<NodeType> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("columns.email")}</>,
    id: "email",
    accessor: (originalRow: NodeType) => originalRow.email,
    disableSortBy: true,
    ...props,
  };
};

export default EmailColumn;
