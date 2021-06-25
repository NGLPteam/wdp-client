import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  CollectionListQuery,
  CollectionListQueryVariables,
} from "__generated__/CollectionListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import useSetVarsWithParam from "hooks/useSetVarsWithParam";
import CollectionHeaders from "./CollectionHeadersPartial";
import Link from "next/link";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import { FullPageLoader } from "components/global";
import { Pagination } from "components/atomic";

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

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  const totalPages = data?.viewer?.collections?.pageInfo?.pageCount || 1;

  return (
    <section>
      <PageHeader title="Collections" />
      {isLoading ? (
        <FullPageLoader />
      ) : (
        <>
          <CardList>
            <CollectionHeaders
              variables={variables}
              setVariables={setVariables}
            />
            {data?.viewer?.collections?.nodes ? (
              data.viewer.collections.nodes.map((collection, index) => (
                <Card key={index}>
                  <h4>
                    <Link href={`/collections/${collection.slug}`}>
                      {collection.title}
                    </Link>
                  </h4>
                </Card>
              ))
            ) : data?.viewer === null ? (
              <div>No collections.</div>
            ) : null}
          </CardList>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
      )}
    </section>
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
          title
          slug
          allowedActions
          hierarchicalDepth
          breadcrumbs {
            depth
            label
            kind
            slug
            crumb {
              __typename
              ... on Entity {
                hierarchicalDepth
                allowedActions
              }
              ... on Community {
                name
              }
              ... on Collection {
                title
              }
              ... on Item {
                title
                breadcrumbs {
                  depth
                  label
                  kind
                  slug
                }
              }
            }
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
  }
`;
