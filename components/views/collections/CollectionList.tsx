import React, { useState, useMemo, useCallback } from "react";
import { graphql } from "react-relay";
import {
  CollectionListQuery,
  CollectionListQueryVariables,
} from "__generated__/CollectionListQuery.graphql";
import { EntityList } from "components/composed/entity";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import useSetVarsWithParam from "hooks/useSetVarsWithParam";
import { MixedLink } from "components/atomic";

export default function CollectionList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [variables, setVariables] = useState<CollectionListQueryVariables>({
    order: "RECENT",
    page: currentPage,
  });

  useSetVarsWithParam("page", currentPage, setCurrentPage, setVariables);

  const { data, error, isLoading } = useAuthenticatedQuery<CollectionListQuery>(
    query,
    variables
  );

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        disableSortBy: true,
        Cell: ({ row, value }) => {
          return (
            <MixedLink
              route="collectionDetail"
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
        handleClick: ({ row }) => console.info(`edit ${row.original.slug}`),
      },
      delete: {
        handleClick: ({ row }) => console.info(`delete ${row.original.slug}`),
      },
    }),
    []
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

  const entities = useMemo(() => data?.viewer?.collections?.nodes, [data]);
  const pageInfo = useMemo(() => data?.viewer?.collections?.pageInfo, [data]);

  return (
    <>
      <EntityList
        entityName="collection"
        error={error}
        entities={entities}
        pageInfo={pageInfo}
        columns={columns}
        actions={actions}
        isLoading={isLoading}
        onSort={handleSort}
        onSelectionChange={handleSelectionChange}
        withUpdatedAt
        withCreatedAt
        withRowSelection
      />
    </>
  );
}

const query = graphql`
  query CollectionListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      collections(access: READ_ONLY, order: $order, page: $page, perPage: 10) {
        nodes {
          __typename
          id
          identifier
          createdAt
          updatedAt
          title
          slug
          allowedActions
          hierarchicalDepth
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
  }
`;
