import React, { useState, useMemo, useCallback } from "react";
import { graphql } from "react-relay";
import { EntityTable } from "components/global";
import {
  CommunityListQuery,
  CommunityListQueryVariables,
} from "__generated__/CommunityListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { MixedLink } from "components/atomic";

export default function CommunityList() {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        disableSortBy: true,
        Cell: ({ row, value }) => {
          return (
            <MixedLink
              route="communityDetail"
              params={{ id: row.original.slug }}
              passHref
            >
              <a>{value}</a>
            </MixedLink>
          );
        },
      },
    ],
    []
  );

  const actions = useMemo(
    () => ({
      edit: {
        // eslint-disable-next-line no-console
        handleClick: ({ row }) => console.log(`edit ${row.original.slug}`),
      },
      delete: {
        // eslint-disable-next-line no-console
        handleClick: ({ row }) => console.log(`delete ${row.original.slug}`),
      },
    }),
    []
  );

  const [variables, setVariables] = useState<CommunityListQueryVariables>({
    order: "RECENT",
    page: 1,
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
    query,
    variables
  );

  const entities = useMemo(
    () =>
      data?.communities?.edges
        ? data?.communities?.edges.map(({ node }) => ({ ...node }))
        : [],
    [data]
  );

  const handleSort = useCallback(
    ({ order }) => {
      if (order) return setVariables({ order, page: variables.page });
    },
    [variables.page]
  );

  const handleSelectionChange = useCallback(({ selectedRowIds }) => {
    // eslint-disable-next-line no-console
    console.table(selectedRowIds);
  }, []);

  return (
    <>
      <EntityTable
        entityName="community"
        entities={entities}
        columns={columns}
        error={error}
        isLoading={isLoading}
        actions={actions}
        onSort={handleSort}
        onSelectionChange={handleSelectionChange}
        withUpdatedAt
        withRowSelection
      />
    </>
  );
}

const query = graphql`
  query CommunityListQuery($order: SimpleOrder!, $page: Int!) {
    communities(order: $order, page: $page, perPage: 10) {
      edges {
        node {
          key: slug
          slug
          name
          updatedAt
        }
      }
      pageInfo {
        page
        perPage
        pageCount
        hasNextPage
        hasPreviousPage
        totalCount
      }
    }
  }
`;
