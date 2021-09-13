import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import type {
  UserListFragment,
  UserListFragment$key,
} from "@/relay/UserListFragment.graphql";
import { CellProps } from "react-table";
import type { ModelTableActionProps } from "react-table";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";

function UserList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: UserListProps) {
  const users = useMaybeFragment<UserListFragment$key>(fragment, data);

  const columns = [
    ModelColumns.CreatedAtColumn<UserNode>(),
    ModelColumns.UpdatedAtColumn<UserNode>(),
    ModelColumns.NameColumn<UserNode>({ route: "user", accessor: "name" }),
    {
      Header: "Email",
      id: "email",
      accessor: (originalRow: UserNode) => originalRow.email,
      disableSortBy: true,
    },
    {
      Header: "Admin?",
      id: "admin",
      accessor: (originalRow: UserNode) => originalRow.globalAdmin,
      disableSortBy: true,
      Cell: ({ value }: CellProps<UserNode>) =>
        value && value === true ? "Yes" : "No",
    },
  ];

  /* eslint-disable no-console */
  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<UserNode>) =>
      console.info(`edit ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  return (
    <ModelListPage<T, UserListFragment, UserNode>
      modelName="user"
      columns={columns}
      actions={actions}
      selectable
      viewOptions={[DataViewOptions.table]}
      data={users}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface UserListProps {
  data?: UserListFragment$key;
  headerStyle?: "primary" | "secondary";
  hideHeader?: boolean;
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
    }
    ...ModelPaginationFragment
    ...ModelPageCountActionsFragment
  }
`;

export default UserList;
