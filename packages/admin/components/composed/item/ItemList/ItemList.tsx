import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "react-table";
import {
  useMaybeFragment,
  useDestroyer,
  useDrawerHelper,
  useSearchQueryVars,
} from "hooks";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import type {
  ItemListFragment,
  ItemListFragment$key,
} from "@/relay/ItemListFragment.graphql";
import {
  ItemListSearchFragment,
  ItemListSearchFragment$key,
} from "@/relay/ItemListSearchFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function ItemList<T extends OperationType>({
  data,
  searchData,
  headerStyle,
  hideHeader,
}: ItemListProps) {
  const items = useMaybeFragment<ItemListFragment$key>(fragment, data);

  const searchScope = useMaybeFragment<ItemListSearchFragment$key>(
    searchFragment,
    searchData
  );

  const destroy = useDestroyer();

  const drawerHelper = useDrawerHelper();

  const searchQuery = useSearchQueryVars();

  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>({
      accessor: (row: Node) => row.entity || row,
    }),
    ModelColumns.NameColumn<Node>({
      id: "title",
      route: "item",
      accessor: (row: Node) => row.entity?.title || row.title,
      disableSortBy: false,
    }),
    ModelColumns.ContributorsColumn<Node>({
      accessor: (row: Node) => row.entity || row,
    }),
    ModelColumns.SchemaColumn<Node>({
      accessor: (row: Node) =>
        row.entity?.schemaVersion?.name || row.schemaVersion?.name,
    }),
    ModelColumns.PublishedDateColumn<Node>({
      accessor: (row: Node) => row.entity || row,
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editItem", {
        drawerSlug: row.original.entity?.slug || row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.item(
        { itemId: row.original.entity?.id || row.original.id },
        row.original.entity?.title || row.original.title || "glossary.item"
      ),
    handleView: ({ row }: ModelTableActionProps<Node>) =>
      row.original.slug
        ? `/items/${row.original.entity?.slug || row.original.slug}`
        : null,
  };

  return (
    <ModelListPage<T, ListFragment, Node>
      modelName="item"
      actions={actions}
      columns={columns}
      data={
        searchQuery.query ||
        (searchQuery.predicates && searchQuery.predicates.length > 0)
          ? searchScope?.results
          : items
      }
      searchData={searchScope}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
      showSearch
    />
  );
}

interface ItemListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: ItemListFragment$key | null;
  searchData?: ItemListSearchFragment$key | null;
}

type ListFragment =
  | ItemListFragment
  | NonNullable<ItemListSearchFragment["results"]>;

type ItemNode = ItemListFragment["nodes"][number];

type ItemSearchNode = NonNullable<
  ItemListSearchFragment["results"]
>["nodes"][number];

type Node = ItemNode & ItemSearchNode;

const fragment = graphql`
  fragment ItemListFragment on ItemConnection {
    nodes {
      id
      slug
      title
      schemaVersion {
        name
        number
      }
      items {
        pageInfo {
          totalCount
        }
      }
      allowedActions
      # eslint-disable-next-line relay/must-colocate-fragment-spreads
      ...ContributorsColumnFragment
      ...EntityThumbnailColumnFragment
      ...PublishedDateColumnFragment
    }
    ...ModelListPageFragment
  }
`;

const searchFragment = graphql`
  fragment ItemListSearchFragment on SearchScope
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    page: { type: "Int", defaultValue: 1 }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    hasQuery: { type: "Boolean!" }
    schema: { type: "[String!]", defaultValue: [] }
  ) {
    results(
      query: $query
      page: $page
      perPage: 20
      predicates: $predicates
      order: $order
      scope: ITEM
      schema: $schema
    ) @include(if: $hasQuery) {
      nodes {
        slug
        entity {
          ... on Node {
            id
          }
          ... on Sluggable {
            slug
          }
          ... on Entity {
            title
            schemaVersion {
              name
              number
            }
            allowedActions
            # eslint-disable-next-line relay/must-colocate-fragment-spreads
            ...ContributorsColumnFragment
            ...EntityThumbnailColumnFragment
            ...PublishedDateColumnFragment
          }
          ... on Item {
            items {
              pageInfo {
                totalCount
              }
            }
          }
        }
      }
      ...ModelListPageFragment
    }
    ...ModelListPageSearchFragment
  }
`;

export default ItemList;
