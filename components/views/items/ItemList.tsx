import React, { useCallback, useMemo, useState } from "react";
import { graphql } from "react-relay";
import {
  ItemListQuery,
  ItemListQueryVariables,
} from "__generated__/ItemListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { EntityList } from "components/composed/entity";
import useSetVarsWithParam from "../../../hooks/useSetVarsWithParam";
import { MixedLink } from "../../atomic";

export default function ItemList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [variables, setVariables] = useState<ItemListQueryVariables>({
    order: "RECENT",
    page: 1,
  });
  useSetVarsWithParam("page", currentPage, setCurrentPage, setVariables);

  const { data, error, isLoading } = useAuthenticatedQuery<ItemListQuery>(
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
              route="itemDetail"
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

  const entities = useMemo(() => data?.viewer?.items?.nodes, [data]);
  const pageInfo = useMemo(() => data?.viewer?.items?.pageInfo, [data]);

  return (
    <>
      <EntityList
        entityName="item"
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
  query ItemListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      items(order: $order, page: $page, perPage: 10) {
        nodes {
          __typename
          id
          identifier
          updatedAt
          createdAt
          title
          slug
          allowedActions
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
