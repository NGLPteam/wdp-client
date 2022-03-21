import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { OperationType } from "relay-runtime";
import type { CellProps, ModelTableActionProps } from "react-table";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useRouteSlug,
} from "hooks";
import {
  UserCollectionsListFragment,
  UserCollectionsListFragment$data,
  UserCollectionsListFragment$key,
} from "@/relay/UserCollectionsListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import ModelListPage from "components/composed/model/ModelListPage";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";

const UserCollectionsList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserCollectionsListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const slug = useRouteSlug();

  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>({
      // Return the data that contains the thumbnail fragment
      accessor: (originalRow: Node) => originalRow?.collection,
    }),
    ModelColumns.NameColumn<Node>({
      route: "collection",
      accessor: "collection",
      Cell: ({ row, value }: CellProps<Node>) => {
        if (!row?.original?.collection?.slug) return value;
        return (
          <NamedLink
            route="collection"
            routeParams={{ slug: row.original.collection.slug }}
            passHref
          >
            <a className="t-weight-md a-link">
              {row.original.collection.title}
            </a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.StringColumn<Node>({
      Header: <>{t("lists.role_column")}</>,
      id: "role",
      accessor: (row: Node) => {
        return row?.role.name;
      },
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editRoleAccess", {
        drawerSlug: row.original.collection?.slug || "",
        drawerUserSlug: row.original.user?.slug || "",
        drawerEntity: "collection",
        drawerRoleId: row.original.role?.id,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) => {
      const { collection, role, user } = row.original;

      if (collection && role && user) {
        return destroy.access(
          {
            entityId: collection.id,
            roleId: role.id,
            userId: user.id,
          },
          "glossary.access"
        );
      }

      console.warn("No entity, role or user defined.");
    },
  };

  const buttons = slug && (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer
        drawer="addUserCollectionAccess"
        drawerQuery={{ drawerSlug: slug }}
        icon="plus"
      >
        {t("actions.add.collection")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  );

  return communities ? (
    <ModelListPage<T, UserCollectionsListFragment, Node>
      modelName="role"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      header={t("glossary.collection_other")}
      disableSortBy
      buttons={buttons}
      actions={actions}
    />
  ) : null;
};

interface Props {
  data?: UserCollectionsListFragment$key | null;
}

type Node = UserCollectionsListFragment$data["edges"][number]["node"];

const fragment = graphql`
  fragment UserCollectionsListFragment on UserCollectionAccessGrantConnection {
    edges {
      node {
        id
        collection {
          id
          title
          slug
          ...EntityThumbnailColumnFragment
        }
        role {
          id
          name
        }
        user {
          id
          slug
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default UserCollectionsList;
