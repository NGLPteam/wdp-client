import React from "react";
import type { OperationType } from "relay-runtime";
import { graphql } from "react-relay";
import type { CellProps, ModelTableActionProps } from "react-table";
import { Trans } from "react-i18next";
import { useMaybeFragment, useDrawerHelper } from "hooks";
import { ALL_VIEW_OPTIONS } from "utils/view-options";
import ModelListPage from "components/composed/model/ModelListPage";
import ModelColumns from "components/composed/model/ModelColumns";
import PageHeader from "components/layout/PageHeader";
import { NamedLink } from "components/atomic";
import type {
  SearchResultListFragment,
  SearchResultListFragment$key,
} from "@/relay/SearchResultListFragment.graphql";
import { Search } from "components/forms";

type HeaderProps = React.ComponentProps<typeof PageHeader>;

function SearchResultList<T extends OperationType>({
  data,
  headerStyle,
  hideHeader,
  searchQuery,
}: SearchResultListProps) {
  const items = useMaybeFragment<SearchResultListFragment$key>(fragment, data);

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
    <ModelListPage<T, SearchResultListFragment, Node>
      modelName="item"
      header={
        <Trans
          i18nKey="search.results_for_name"
          values={{
            name: searchQuery,
          }}
        />
      }
      actions={actions}
      columns={columns}
      data={items}
      headerStyle={headerStyle}
      hideHeader={hideHeader}
      viewOptions={ALL_VIEW_OPTIONS}
      search={<Search filterDrawer="searchFilters" />}
    />
  );
}

interface SearchResultListProps
  extends Pick<HeaderProps, "headerStyle" | "hideHeader"> {
  data?: SearchResultListFragment$key | null;
  searchQuery?: string | null;
}

type Node = SearchResultListFragment["nodes"][number];

const fragment = graphql`
  fragment SearchResultListFragment on SearchResultConnection {
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
`;

export default SearchResultList;
