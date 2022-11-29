import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
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
    ModelColumns.UserNameColumn<UserNode>(),
    ModelColumns.EmailColumn<UserNode>(),
    ModelColumns.BooleanColumn<UserNode>({
      header: () => <>{t("lists.admin_column")}</>,
      id: "globalAdmin",
      enableSorting: true,
    }),
    ModelColumns.CreatedAtColumn<UserNode>({ enableSorting: true }),
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
      ...UserNameColumnFragment
    }
    ...ModelListPageFragment
  }
`;

export default UserList;
