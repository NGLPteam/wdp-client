import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  ItemListQuery,
  ItemListQueryVariables,
} from "__generated__/ItemListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import ItemHeaders from "./ItemHeadersPartial";

export default function ItemList() {
  const [variables, setVariables] = useState<Variables>({
    order: "RECENT",
  });

  const { data, error, isLoading } = useAuthenticatedQuery<ItemListQuery>(
    query,
    variables
  );

  if (isLoading) {
    return null;
  }

  if (error?.message) {
    return <div>{error.message}</div>;
  }

  if (data) {
    console.log(data);
  }
  return (
    <section>
      <PageHeader title="Items" />
      <CardList>
        <ItemHeaders variables={variables} setVariables={setVariables} />
        {data?.viewer?.items?.nodes ? (
          data.viewer.items.nodes.map((item, index) => (
            <Card key={index}>
              <h4>
                <Link href={`/items/${item.slug}`}>{item.title}</Link>
              </h4>
            </Card>
          ))
        ) : data?.viewer === null ? (
          <div>No items.</div>
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

export interface Variables extends ItemListQueryVariables {
  order: "RECENT" | "OLDEST";
}

// TODO: make breadcrumbs into a fragment to live within breadcrumbs
const query = graphql`
  query ItemListQuery($order: SimpleOrder!) {
    viewer {
      items(access: READ_ONLY, order: $order) {
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
