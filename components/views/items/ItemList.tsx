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
  const [variables, setVariables] = useState<ItemListQueryVariables>({
    order: "RECENT",
    page: 1,
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

  return (
    <section>
      <PageHeader title="Items" />
      <CardList>
        <ItemHeaders variables={variables} setVariables={setVariables} />
        {data?.viewer?.items?.nodes ? (
          data.viewer.items.nodes.map((item, i) => (
            <Card key={i}>
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

const query = graphql`
  query ItemListQuery($order: SimpleOrder!, $page: Int!) {
    viewer {
      items(order: $order, page: $page, perPage: 20) {
        nodes {
          __typename
          id
          identifier
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
