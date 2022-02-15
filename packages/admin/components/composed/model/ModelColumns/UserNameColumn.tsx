import React from "react";
import { graphql } from "react-relay";
import { Column, CellProps } from "react-table";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { PartialColumnish, Node } from "./types";
import UserNameColumnCell from "./UserNameColumnCell";
import { UserNameColumnFragment$key } from "@/relay/UserNameColumnFragment.graphql";

type Props<T extends Node> = PartialColumnish<T>;

type Row = Node & UserNameColumnFragment$key;

const UserNameColumn = <T extends Node>(props: Props<T> = {}): Column<T> => {
  const { t } = useTranslation();

  return {
    Header: <>{t("lists.name_column")}</>,
    id: "name",
    cellType: "name",
    accessor: (originalRow: T | Row) => originalRow,
    Cell: ({ value }: CellProps<T>) => {
      const user = useMaybeFragment(fragment, value);

      return <UserNameColumnCell data={user} />;
    },
    ...props,
  };
};

export default UserNameColumn;

const fragment = graphql`
  fragment UserNameColumnFragment on User {
    ...UserNameColumnCellFragment
  }
`;
