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
import { ButtonControl } from "components/atomic";
import { formatDate } from "helpers/dates";

// Set the table columns for react-aria/table
const COLUMNS = [
  { name: "Name", key: "name", allowsSorting: false },
  { name: "Updated At", key: "updatedAt", allowsSorting: true },
  {
    name: "Actions",
    key: "actions",
    allowsSorting: false,
    hideLabel: true,
  },
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

enum Order {
  OLDEST = "OLDEST",
  RECENT = "RECENT",
}

export default function CommunityList() {
  const [variables, setVariables] = useState<CommunityListQueryVariables>({
    order: "RECENT",
    page: 1,
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
    query,
    variables
  );

  // Flatten node to fit list structure
  const rows = useMemo(() => {
    return data?.communities?.edges.map(({ node }) => ({ ...node }));
  }, [data?.communities?.edges]);

  // Set sort descriptor to fit sort structure
  const sort = useMemo(() => SORT[variables.order], [variables.order]);

  const handleSort = useCallback(
    (sortValue) => {
      // Find the value in sort options
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const newOrder = Object.entries(SORT).find(
        ([key, value]) =>
          value.column === sortValue.column &&
          value.direction === sortValue.direction
      );
      /* eslint-enable @typescript-eslint/no-unused-vars */
      // Return the key
      // This is bizare but it fixes the types issue.
      if (newOrder && newOrder[0]) {
        const order = Order[newOrder[0]];
        if (order) {
          setVariables({ ...variables, order });
        }
      }
    },
    [setVariables, variables]
  );

  return (
    <section>
      <PageHeader title="Communities" />
      {isLoading ? (
        <FullPageLoader />
      ) : data?.communities?.edges ? (
        <Table aria-label={`Table of Communities`} multiselect>
          <Table.Header columns={COLUMNS} multiselect>
            {({ key, name, allowsSorting, hideLabel }) => (
              <Table.Column
                key={key}
                columnKey={key}
                allowsSorting={allowsSorting}
                onSortChange={handleSort}
                sort={sort}
              >
                <span className={hideLabel ? "a-hidden" : null}>{name}</span>
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body rows={rows} columns={COLUMNS} multiselect>
            {({ row, column }, i) => (
              <Table.Cell
                key={column.key}
                align={column.key === "actions" ? "right" : "left"}
                role={i === 0 ? "rowheader" : "gridcell"}
              >
                {column.key === "actions" ? (
                  <>
                    <ButtonControl
                      icon="arrow"
                      iconRotate={90}
                      aria-label="Edit"
                    />
                    <ButtonControl icon="delete" aria-label="Delete" />
                  </>
                ) : column.key === "name" ? (
                  <Link href={`/communities/${row.slug}`}>
                    {row[column.key]}
                  </Link>
                ) : column.key === "updatedAt" ? (
                  formatDate(row[column.key])
                ) : (
                  row[column.key]
                )}
              </Table.Cell>
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
