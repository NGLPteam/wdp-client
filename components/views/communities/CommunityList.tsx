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
import CommunityHeaders from "./CommunityHeaders";

export default function CommunityList() {
  const [variables, setVariables] = useState<Variables>({
    order: "RECENT",
  });

  const { data, isLoading } = useAuthenticatedQuery<CommunityListQuery>(
    query,
    variables
  );

  if (isLoading) {
    return null;
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
        ) : (
          <FullPageLoader />
        )}
      </CardList>
    </section>
  );
}

export interface Variables extends CommunityListQueryVariables {
  order: "RECENT" | "OLDEST";
}

const query = graphql`
  query CommunityListQuery($order: SimpleOrder!) {
    communities(order: $order) {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
`;
