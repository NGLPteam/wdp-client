import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  CollectionListQuery,
  CollectionListQueryVariables,
} from "__generated__/CollectionListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import CollectionHeaders from "./CollectionHeadersPartial";

export default function CollectionList() {
  const [variables, setVariables] = useState<CollectionListQueryVariables>({
    order: "RECENT",
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CollectionListQuery>(
    query,
    variables
  );

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  return (
    <section>
      <PageHeader title="Collections" />
      <CardList>
        <CollectionHeaders variables={variables} setVariables={setVariables} />
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
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

// TODO: make breadcrumbs into a fragment to live within breadcrumbs
const query = graphql`
  query CollectionListQuery($order: SimpleOrder!) {
    viewer {
      collections(access: READ_ONLY, order: $order) {
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
      }
    }
  }
`;
