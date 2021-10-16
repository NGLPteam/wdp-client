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

// Lists user access on any type of entity
// entityType must be collection, item, or community for proper labelling
function RoleAccessList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  header = "navLabels.access",
  entityType,
}: RoleAccessListProps) {
  const entity = useMaybeFragment<RoleAccessListFragment$key>(fragment, data);
  const roles = useMaybeFragment<RoleAccessListDataFragment$key>(
    listDataFragment,
    entity?.allAccessGrants
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
      Header: <>{t("columns.role")}</>,
      id: "role",
      Cell: ({ value }: CellProps<T>) => value?.name || "",
    }),
  ];

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
          actions={
            entityType === "community"
              ? "communities.manage_access"
              : entityType === "collection"
              ? "collections.manage_access"
              : "items.manage_access"
          }
          allowedActions={entity?.allowedActions}
        >
          {t(
            entityType === "community"
              ? "actions.add.community_member"
              : "actions.add.access"
          )}
        </ButtonControlDrawer>
      </ButtonControlGroup>
    ) : null;

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
  // Used to set specific labels on the drawer and form
  entityType?: "community" | "collection" | "item";
}

type Node = RoleAccessListDataFragment["edges"][number]["node"];

const fragment = graphql`
  fragment RoleAccessListFragment on Entity {
    allowedActions
    allAccessGrants(page: $page, perPage: 20) {
      ...RoleAccessListDataFragment
    }
  }
`;

const listDataFragment = graphql`
  fragment RoleAccessListDataFragment on AnyAccessGrantConnection {
    edges {
      node {
        ... on UserCollectionAccessGrant {
          id
          role {
            name
          }
          user {
            name
            email
          }
        }
        ... on UserItemAccessGrant {
          id
          role {
            name
          }
          user {
            name
            email
          }
        }
        ... on UserCommunityAccessGrant {
          id
          role {
            name
          }
          user {
            name
            email
          }
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default RoleAccessList;
