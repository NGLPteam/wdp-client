import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { CellProps, ModelTableActionProps } from "react-table";
import { useTranslation } from "react-i18next";
import UserNameColumnCell from "../UserNameColumnCell";
import { useDrawerHelper, useMaybeFragment } from "hooks";
import type {
  UserListFragment,
  UserListFragment$key,
} from "@/relay/UserListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function UserList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: UserListProps) {
  const users = useMaybeFragment<UserListFragment$key>(fragment, data);

  const { t } = useTranslation();
  const drawerHelper = useDrawerHelper();

  const columns = [
    ModelColumns.NameColumn<UserNode>({
      route: "user",
      accessor: "name",
      Cell: ({ row }: CellProps<UserNode>) => (
        <UserNameColumnCell data={row.original} />
      ),
    }),
    ModelColumns.EmailColumn<UserNode>(),
    ModelColumns.BooleanColumn<UserNode>({
      Header: <>{t("lists.admin_column")}</>,
      id: "admin",
    }),
    ModelColumns.CreatedAtColumn<UserNode>(),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<UserNode>) => {
      drawerHelper.open("editUser", { drawerSlug: row.original.slug });
    },
  };

  return (
    <ModelListPage<T, UserListFragment, UserNode>
      modelName="user"
      columns={columns}
      data={users}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      actions={actions}
      disableSortBy
    />
  );
}

interface UserListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: UserListFragment$key;
}

type UserNode = UserListFragment["nodes"][number];

const fragment = graphql`
  fragment UserListFragment on UserConnection {
    nodes {
      email
      globalAdmin
      name
      slug
      createdAt
      updatedAt
      ...UserNameColumnCellFragment
    }
    ...ModelListPageFragment
  }
`;

export default UserList;
