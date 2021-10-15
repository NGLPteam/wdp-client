import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import { useMaybeFragment, useRouteSlug } from "hooks";
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
import type { CellProps } from "react-table";

const UserCollectionsList = <T extends OperationType>({ data }: Props) => {
  const communities = useMaybeFragment<UserCollectionsListFragment$key>(
    fragment,
    data
  );

  const { t } = useTranslation();

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
          name
        }
      }
    }
    ...ModelListPageFragment
  }
`;

export default UserCollectionsList;
