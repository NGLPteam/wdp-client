import React, { useState, useMemo, useCallback } from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import {
  CommunityListQuery,
  CommunityListQueryVariables,
} from "__generated__/CommunityListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader, Table } from "components/layout";
import { FullPageLoader } from "components/global";

// Set the table columns for react-aria/table
const COLUMNS = [
  { name: "Name", key: "name", allowsSorting: false },
  { name: "Updated At", key: "updatedAt", allowsSorting: true },
  { name: "Actions", key: "actions", allowsSorting: false, hideLabel: true },
];

const SORT = {
  OLDEST: {
    column: "updatedAt",
    direction: "ascending",
  },
  RECENT: {
    column: "updatedAt",
    direction: "descending",
  },
};

export default function CommunityList() {
  const [variables, setVariables] = useState<CommunityListQueryVariables>({
    order: "RECENT",
    page: 1,
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
    query,
    variables
  );

  // Flatten node to fit react-aria/table list structure
  const items = useMemo(() => {
    return data?.communities?.edges.map(({ node }) => ({ ...node }));
  }, [data?.communities?.edges]);

  // Set sort descriptor to fit react-aria/table structure
  const sortDescriptor = useMemo(() => SORT[variables.order], [
    variables.order,
  ]);

  const handleSort = useCallback(
    (sortValue) => {
      // Find the value in sort options
      const newOrder = Object.entries(SORT).find(
        ([key, value]) =>
          value.column === sortValue.column &&
          value.direction === sortValue.direction
      );
      // Return the key
      if (newOrder[0]) {
        setVariables({ order: newOrder[0] });
      }
    },
    [setVariables]
  );

  return (
    <section>
      <PageHeader title="Communities" />
      {isLoading ? (
        <FullPageLoader />
      ) : data?.communities?.edges ? (
        <Table
          aria-label={`Table of Communities`}
          onSortChange={handleSort}
          sortDescriptor={sortDescriptor}
        >
          <Table.Header columns={COLUMNS}>
            {({ name, allowsSorting, hideLabel }) => (
              <Table.Column
                allowsSorting={allowsSorting}
                onSortChange={handleSort}
                sortDescriptor={sortDescriptor}
              >
                <span className={hideLabel ? "a-hidden" : null}>{name}</span>
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={items}>
            {(item) => (
              <Table.Row>
                {(columnKey) =>
                  columnKey === "actions" ? (
                    <Table.Cell>
                      <button>Edit -&gt;</button>
                      <button>Delete x</button>
                    </Table.Cell>
                  ) : columnKey === "name" ? (
                    <Table.Cell>
                      <Link href={`/communities/${item.slug}`}>
                        {item[columnKey]}
                      </Link>
                    </Table.Cell>
                  ) : (
                    <Table.Cell>{item[columnKey]}</Table.Cell>
                  )
                }
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      ) : error?.message ? (
        <div>{error.message}</div>
      ) : (
        <div>No communities.</div>
      )}
    </section>
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
