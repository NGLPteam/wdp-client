import React from "react";
import ModelListPage from "components/composed/model/ModelListPage";
import { OperationType } from "relay-runtime";
import { graphql, useFragment } from "react-relay";
import {
  UserListFragment,
  UserListFragment$key,
} from "@/relay/UserListFragment.graphql";
import { CellProps } from "react-table";
import ModelColumns from "components/composed/model/ModelColumns";
import { DataViewOptions } from "components/atomic/DataViewToggle";
import type { ModelTableActionProps } from "react-table";

interface UserListProps {
  data: UserListFragment$key;
}

type UserNode = UserListFragment["nodes"][number];
function UserList<T extends OperationType>({ data }: UserListProps) {
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
    handleDelete: ({ row }: ModelTableActionProps<UserNode>) =>
      console.info(`delete ${row.original.slug}`),
  };
  /* eslint-enable no-console */

  const users = useFragment<UserListFragment$key>(fragment, data);
  return (
    <ModelListPage<T, UserListFragment, UserNode>
      modelName="user"
      columns={columns}
      actions={actions}
      selectable
      viewOptions={[DataViewOptions.table]}
      data={users}
    />
  );
}

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
