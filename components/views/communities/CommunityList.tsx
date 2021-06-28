import React, { useState, useMemo } from "react";
import { graphql } from "react-relay";
import Link from "next/link";
import {
  CommunityListQuery,
  CommunityListQueryVariables,
} from "__generated__/CommunityListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader, Table } from "components/layout";
import { FullPageLoader } from "components/global";

export default function CommunityList() {
  const [variables, setVariables] = useState<CommunityListQueryVariables>({
    order: "RECENT",
    page: 1,
  });
  // { column: "name", direction: "ascending" }

  const { data, error, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
    query,
    variables
  );

  // Flatten node to fit react-aria/table list structure
  const items = useMemo(() => {
    return data?.communities?.edges.map(({ node }) => ({ ...node }));
  }, [data?.communities?.edges]);

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  // Set the table columns for react-aria/table
  const columns = [
    { name: "Name", key: "name", allowsSorting: true, hideLabel: false },
    { name: "Slug", key: "slug", allowsSorting: false, hideLabel: false },
    { name: "Actions", key: "actions", allowsSorting: false, hideLabel: true },
  ];

  return (
    <section>
      <PageHeader title="Communities" />
      {isLoading ? (
        <FullPageLoader />
      ) : data?.communities?.edges ? (
        <Table aria-label={`Table of Communities`}>
          <Table.Header columns={columns}>
            {({ name, allowsSorting, hideLabel }) => (
              <Table.Column allowsSorting={allowsSorting}>
                <span className={hideLabel && "a-hidden"}>{name}</span>
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
          id
          slug
          name
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
