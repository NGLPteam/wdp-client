import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { RoleAccessListFragment$key } from "@/relay/RoleAccessListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps } from "react-table";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import {
  RoleAccessListDataFragment,
  RoleAccessListDataFragment$key,
} from "@/relay/RoleAccessListDataFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function RoleAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
  entityType,
}: RoleAccessListProps) {
  const community = useMaybeFragment<RoleAccessListFragment$key>(
    fragment,
    data
  );
  const roles = useMaybeFragment<RoleAccessListDataFragment$key>(
    listDataFragment,
    community?.assignedUsers
  );

  const slug = useRouteSlug();
  const { t } = useTranslation();

  const columns = [
    ModelColumns.ThumbnailColumn<Node>(),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.name")}</>,
      id: "user.name",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.email")}</>,
      id: "user.email",
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("columns.roles")}</>,
      id: "roles",
      Cell: ({ value }: CellProps<T>) =>
        value.map(({ name }: { name: string }) => name).join(", "),
    }),
  ];

  // TODO: Check allowedActions here to see if the user can add a member
  // Currently there are no permissions around roles
  const buttons =
    slug && entityType ? (
      <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
        <ButtonControlDrawer
          drawer={"addRoleAccess"}
          drawerQuery={{
            drawerSlug: slug,
            drawerEntity: entityType,
          }}
          icon="plus"
        >
          {t(
            entityType === "community"
              ? "actions.add.community.member"
              : "actions.add.access"
          )}
        </ButtonControlDrawer>
      </ButtonControlGroup>
    ) : null;

  // TODO: We need an authorization check here.
  // There are currently no allowedActions around roles.
  return (
    <ModelListPage<T, RoleAccessListDataFragment, Node>
      modelName="role"
      columns={columns}
      data={roles}
      header={t(header)}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      buttons={buttons}
    />
  );
}

interface RoleAccessListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: RoleAccessListFragment$key | null;
  header?: string;
  entityType?: "community" | "collection" | "item";
}

type Node = RoleAccessListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment RoleAccessListFragment on Entity {
    allowedActions
    assignedUsers(order: USER_NAME_ASC, page: $page, perPage: 20) {
      ...RoleAccessListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment RoleAccessListDataFragment on ContextualPermissionConnection {
    edges {
      node {
        id
        roles {
          name
        }
        user {
          name
          email
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default RoleAccessList;
