import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
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
import { OperationType } from "relay-runtime";
import {
  ButtonControlDrawer,
  ButtonControlGroup,
  NamedLink,
} from "components/atomic";
import type { CellProps, ModelTableActionProps } from "react-table";

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
    ModelColumns.ThumbnailColumn<Node>({
      accessor: (row: Node) => row?.collection?.thumbnail?.image,
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
      Header: <>{t("columns.role")}</>,
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
          "glossary.access.label"
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
      modelName="collection"
      columns={columns}
      data={communities}
      headerStyle="secondary"
      header="Managed Collections"
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
          thumbnail {
            image: medium {
              png {
                url
                height
                width
                alt
              }
            }
          }
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
