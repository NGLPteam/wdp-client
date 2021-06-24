import React, { useState } from "react";
import { graphql } from "react-relay";
import {
  CommunityListQuery,
  CommunityListQueryVariables,
} from "__generated__/CommunityListQuery.graphql";
import useAuthenticatedQuery from "hooks/useAuthenticatedQuery";
import { PageHeader } from "components/layout";
import { Card, CardList } from "components/layout/CardList/CardList";
import Link from "next/link";
import { FullPageLoader } from "components/global";
import CommunityHeaders from "./CommunityHeadersPartial";

export default function CommunityList() {
  const [variables, setVariables] = useState<CommunityListQueryVariables>({
    order: "RECENT",
    page: 1,
  });

  const { data, error, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
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
      <PageHeader title="Communities" />
      <CardList>
        <CommunityHeaders variables={variables} setVariables={setVariables} />
        {data?.communities?.edges ? (
          data.communities.edges.map(({ node: community }, index) => (
            <Card key={index}>
              <h4>
                <Link href={`/communities/${community.slug}`}>
                  {community.name}
                </Link>
              </h4>
            </Card>
          ))
        ) : data?.communities === null ? (
          <div>No communities.</div>
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

const query = graphql`
  query CommunityListQuery($order: SimpleOrder!, $page: Int!) {
    communities(order: $order, page: $page, perPage: 20) {
      edges {
        node {
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
      }
    }
  }
`;
