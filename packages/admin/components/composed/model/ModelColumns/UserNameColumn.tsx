import { graphql, readInlineData } from "relay-runtime";
import type { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { PartialColumnish, Node } from "./types";
import UserNameColumnCell from "./UserNameColumnCell";
import { UserNameColumnFragment$key } from "@/relay/UserNameColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & UserNameColumnFragment$key;

const UserNameColumn = <T extends Node>(props: Props<T> = {}): ColumnDef<T> => {
  const { t } = useTranslation();

  return {
    header: () => <>{t("lists.name_column")}</>,
    id: "name",
    meta: {
      cellType: "name",
    },
    accessorFn: (originalRow: T | Row) => originalRow,
    cell: ({ getValue }) => {
      const value = getValue() as UserNameColumnFragment$key;
      const user = readInlineData(fragment, value);

      return <UserNameColumnCell data={user} />;
    },
    ...props,
  };
};

export default UserNameColumn;

const fragment = graphql`
  fragment UserNameColumnFragment on User @inline {
    ...UserNameColumnCellFragment
  }
`;
