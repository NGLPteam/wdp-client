import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { CellProps, ModelTableActionProps } from "react-table";
import { Trans } from "react-i18next";
import { useMaybeFragment, useDrawerHelper, useSearchQueryVars } from "hooks";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { NamedLink } from "components/atomic";
import type {
  SearchResultListFragment,
  SearchResultListFragment$key,
} from "@/relay/SearchResultListFragment.graphql";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function SearchResultList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
}: SearchResultListProps) {
  const searchQuery = useSearchQueryVars();

  const searchScope = useMaybeFragment<SearchResultListFragment$key>(
    fragment,
    data
  );

  const drawerHelper = useDrawerHelper();

  const columns = [
    ModelColumns.EntityThumbnailColumn<Node>({
      accessor: "entity",
    }),
    ModelColumns.NameColumn<Node>({
      accessor: "entity",
      Cell: ({ row, value }: CellProps<Node>) => {
        if (!row?.original?.entity?.slug) return value.slug;

        const route =
          row?.original?.entity?.schemaVersion?.kind === "COLLECTION"
            ? "collection"
            : "item";

        return (
          <NamedLink
            route={route}
            routeParams={{ slug: row.original.entity.slug }}
            passHref
          >
            <a className="t-weight-md a-link">{value.title}</a>
          </NamedLink>
        );
      },
    }),
    ModelColumns.SchemaColumn<Node>({
      accessor: (originalRow: Node) => {
        return `${originalRow?.entity?.schemaVersion?.name}`;
      },
    }),
    ModelColumns.PublishedDateColumn<Node>({
      accessor: "entity",
    }),
  ];

  const actions = {
    handleEdit: ({ row }: ModelTableActionProps<Node>) =>
      drawerHelper.open(
        row?.original?.entity?.schemaVersion?.kind === "COLLECTION"
          ? "editCollection"
          : "editItem",
        { drawerSlug: row.original.entity.slug }
      ),
    handleView: ({ row }: ModelTableActionProps<Node>) =>
      row.original.entity.slug
        ? `/${
            row?.original?.entity?.schemaVersion?.kind === "COLLECTION"
              ? "collection"
              : "item"
          }/${row.original.entity.slug}`
        : null,
  };

  return (
    <ModelListPage<T, SearchResultListFragment["results"], Node>
      modelName="item"
      header={
        <Trans
          i18nKey="search.results_for_name"
          values={{
            name: searchQuery.query,
          }}
        />
      }
      actions={actions}
      columns={columns}
      data={searchScope?.results}
      searchData={searchScope}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
      showSearch
    />
  );
}

interface SearchResultListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: SearchResultListFragment$key | null;
  searchQuery?: string | null;
  isLoading?: boolean;
}

type Node = SearchResultListFragment["results"]["nodes"][number];

const fragment = graphql`
  fragment SearchResultListFragment on SearchScope
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    page: { type: "Int", defaultValue: 1 }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    schema: { type: "[String!]", defaultValue: [] }
  ) {
    results(
      query: $query
      page: $page
      predicates: $predicates
      order: $order
      perPage: 20
      schema: $schema
    ) {
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
              kind
            }
            allowedActions
            # eslint-disable-next-line relay/must-colocate-fragment-spreads
            ...EntityThumbnailColumnFragment
            ...PublishedDateColumnFragment
          }
        }
      }
      pageInfo {
        totalCount
      }
      ...ModelListPageFragment
    }
    ...ModelListPageSearchFragment
  }
`;

export default SearchResultList;
