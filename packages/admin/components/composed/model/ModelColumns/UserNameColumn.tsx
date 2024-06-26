import { graphql, readInlineData } from "relay-runtime";
import { useTranslation } from "react-i18next";
import { UserNameColumnFragment$key } from "@/relay/UserNameColumnFragment.graphql";
import { PartialColumnish, Node } from "./types";
import UserNameColumnCell from "./UserNameColumnCell";
import { getAccessorProps, hasFragments } from "./helpers";
import type { ColumnDef } from "@tanstack/react-table";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & UserNameColumnFragment$key;

const UserNameColumn = <T extends Node>(props: Props<T> = {}): ColumnDef<T> => {
  const { t } = useTranslation();
  const { accessorKey } = getAccessorProps<T>(props);

  return {
    header: () => <>{t("lists.name_column")}</>,
    id: "name",
    meta: {
      cellType: "name",
    },
    ...(accessorKey
      ? { accessorKey }
      : { accessorFn: (originalRow: T | Row) => originalRow }),
    cell: ({ getValue }) => {
      const value = getValue<Row>();

      if (!hasFragments(value)) return <></>;

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
