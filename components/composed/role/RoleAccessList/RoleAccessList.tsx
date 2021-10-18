import React from "react";
import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useRouteSlug,
} from "hooks";
import { RoleAccessListFragment$key } from "@/relay/RoleAccessListFragment.graphql";

import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { useTranslation } from "react-i18next";
import { CellProps, ModelTableActionProps } from "react-table";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";
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
  const drawerHelper = useDrawerHelper();
  const destroy = useDestroyer();

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
      Header: <>{t("columns.role")}</>,
      id: "role",
      Cell: ({ value }: CellProps<T>) => value?.name || "",
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editRoleAccess", {
        drawerSlug: slug || "",
        drawerUserSlug: row.original.user?.slug || "",
        drawerEntity: entityType,
        drawerRoleId: row.original.role?.id,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) => {
      const { entity, role, user } = row.original;

      if (entity && role && user) {
        return destroy.access(
          {
            entityId: entity.id,
            roleId: role.id,
            userId: user.id,
          },
          "glossary.access.label"
        );
      }

      console.warn("No entity, role or user defined.");
    },
  };

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
          allowedActions={
            entityType !== "community" ? entity?.allowedActions : undefined
          }
        >
          {t(
            entityType === "community"
              ? "actions.add.member"
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
      actions={actions}
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
          slug
          role {
            id
            name
          }
          user {
            id
            slug
            name
            email
          }
          entity: collection {
            id
          }
        }
        ... on UserItemAccessGrant {
          id
          slug
          role {
            id
            name
          }
          user {
            id
            slug
            name
            email
          }
          entity: item {
            id
          }
        }
        ... on UserCommunityAccessGrant {
          id
          slug
          role {
            id
            name
          }
          user {
            id
            slug
            name
            email
          }
          entity: community {
            id
          }
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default RoleAccessList;
