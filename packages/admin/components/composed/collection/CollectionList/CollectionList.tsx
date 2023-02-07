import { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { ModelTableActionProps } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { useLatestPresentValue } from "@wdp/lib/hooks";
import ModelListPage from "components/composed/model/ModelListPage";
import {
  useDestroyer,
  useDrawerHelper,
  useMaybeFragment,
  useSearchQueryVars,
} from "hooks";
import {
  CollectionListFragment,
  CollectionListFragment$key,
} from "@/relay/CollectionListFragment.graphql";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import { ButtonControlDrawer, ButtonControlGroup } from "components/atomic";
import {
  CollectionListSearchFragment,
  CollectionListSearchFragment$key,
} from "@/relay/CollectionListSearchFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function CollectionList<T extends OperationType>({
  data,
  searchData,
  headerStyle,
  hideHeader,
}: CollectionListProps) {
  const destroy = useDestroyer();
  const drawerHelper = useDrawerHelper();
  const { t } = useTranslation();

  const collections = useMaybeFragment<CollectionListFragment$key>(
    fragment,
    data
  );

  const { current: memoizedData } = useLatestPresentValue(collections);

  const searchScope = useMaybeFragment<CollectionListSearchFragment$key>(
    searchFragment,
    searchData
  );

  const { current: memoizedSearch } = useLatestPresentValue(searchScope);

  const searchQuery = useSearchQueryVars();

  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>({
      accessorFn: (row: Node) => row.entity || row,
    }),
    ModelColumns.NameColumn<Node>({
      id: "title",
      route: "collection",
      accessorFn: (row: Node) => row.entity?.title || row.title,
      enableSorting: true,
    }),
    ModelColumns.SchemaColumn<Node>({
      accessorFn: (row: Node) =>
        row.entity?.schemaVersion?.name || row.schemaVersion?.name,
    }),
    ModelColumns.PublishedDateColumn<Node>({
      accessorFn: (row: Node) => row.entity || row,
    }),
    ModelColumns.CreatedAtColumn<Node>({
      accessorFn: (row: Node) => row.entity?.createdAt || row.createdAt,
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open("editCollection", {
        drawerSlug: row.original.entity?.slug || row.original.slug,
      }),
    handleDelete: ({ row }: ModelTableActionProps<Node>) =>
      destroy.collection(
        { collectionId: row.original.entity?.id || row.original.id },
        row.original.title || "glossary.collection"
      ),
    handleView: ({ row }: ModelTableActionProps<Node>) =>
      row.original.slug
        ? `/collections/${row.original.entity?.slug || row.original.slug}`
        : null,
  };

  const buttons = !hideHeader ? (
    <ButtonControlGroup toggleLabel={t("options")} menuLabel={t("options")}>
      <ButtonControlDrawer drawer="addCollection" icon="plus">
        {t("actions.add.collection")}
      </ButtonControlDrawer>
    </ButtonControlGroup>
  ) : undefined;

  return (
    <ModelListPage<T, ListFragment, Node>
      modelName="collection"
      columns={columns}
      actions={actions}
      data={
        searchQuery.query ||
        (searchQuery.predicates && searchQuery.predicates.length > 0)
          ? memoizedSearch?.results
          : memoizedData
      }
      searchData={memoizedSearch}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
      buttons={buttons}
      showSearch
    />
  );
}

interface CollectionListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: CollectionListFragment$key | null;
  searchData?: CollectionListSearchFragment$key | null;
}

type ListFragment =
  | CollectionListFragment
  | NonNullable<CollectionListSearchFragment["results"]>;

type CollectionNode = CollectionListFragment["nodes"][number];

type CollectionSearchNode = NonNullable<
  CollectionListSearchFragment["results"]
>["nodes"][number];

type Node = CollectionNode & CollectionSearchNode;

const fragment = graphql`
  fragment CollectionListFragment on CollectionConnection {
    nodes {
      id
      createdAt
      title
      slug
      schemaVersion {
        name
        number
      }
      allowedActions
      ...EntityThumbnailColumnFragment
      ...PublishedDateColumnFragment
    }
    ...ModelListPageFragment
  }
`;

const searchFragment = graphql`
  fragment CollectionListSearchFragment on SearchScope
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
      scope: COLLECTION
      schema: $schema
    ) @include(if: $hasQuery) {
      nodes {
        slug
        entity {
          ... on Sluggable {
            slug
          }
          ... on Node {
            id
          }
          ... on Entity {
            title
            schemaVersion {
              name
              number
            }
          }
          ... on Collection {
            createdAt
          }
          ... on Item {
            createdAt
          }
          ... on Entity {
            allowedActions
            ...PublishedDateColumnFragment
            ...EntityThumbnailColumnFragment
          }
        }
      }
      ...ModelListPageFragment
    }
    ...ModelListPageSearchFragment
  }
`;

export default CollectionList;
