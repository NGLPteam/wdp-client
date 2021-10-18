import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment } from "hooks";
import { RoleAssignedUsersListFragment$key } from "@/relay/RoleAssignedUsersListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { NamedLink } from "components/atomic";
import {
  RoleAssignedUsersListDataFragment,
  RoleAssignedUsersListDataFragment$key,
} from "@/relay/RoleAssignedUsersListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

// Lists user access on any type of entity
function RoleAssignedUsersList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
}: RoleAssignedUsersListProps) {
  const entity = useMaybeFragment<RoleAssignedUsersListFragment$key>(
    fragment,
    data
  );
  const users = useMaybeFragment<RoleAssignedUsersListDataFragment$key>(
    listDataFragment,
    entity?.assignedUsers
  );

  const { t } = useTranslation();

  const columns = [
    ModelColumns.NameColumn<Node>({
      route: "user",
      accessor: "user",
      Cell: ({ row }: CellProps<Node>) => {
        return (
          <NamedLink
            route={"user"}
            routeParams={{ slug: row.original.user?.slug || "" }}
            passHref
          >
            <a className="t-weight-md a-link">{row.original.user?.name}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.email")}</>,
      id: "user.email",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.roles")}</>,
      id: "roles",
      Cell: ({ value }: CellProps<T>) =>
        value?.map((item) => item.name).join(",") || "",
    }),
  ];

  return (
    <ModelListPage<T, RoleAssignedUsersListDataFragment, Node>
      modelName="role"
      columns={columns}
      data={users}
      header={t(header)}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
    />
  );
}

interface RoleAssignedUsersListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: RoleAssignedUsersListFragment$key | null;
  header?: string;
}

type Node = RoleAssignedUsersListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment RoleAssignedUsersListFragment on Entity {
    assignedUsers(page: $page, perPage: 20) {
      ...RoleAssignedUsersListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment RoleAssignedUsersListDataFragment on ContextualPermissionConnection {
    edges {
      node {
        id
        roles {
          name
        }
        user {
          id
          name
          email
          slug
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default RoleAssignedUsersList;
