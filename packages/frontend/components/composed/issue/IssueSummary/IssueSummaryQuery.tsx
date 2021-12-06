import React from "react";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { graphql } from "react-relay";
import IssueSummaryOrderingList from "./IssueSummaryOrderingList";
import { IssueSummaryQuery as Query } from "@/relay/IssueSummaryQuery.graphql";

export default function IssueSummaryQuery({ order = "articles" }: Props) {
  const slug = useRouteSlug();
  const router = useRouter();
  // If an order is defined in the query, use it
  // Otherwise, use what's passed in to IssueSummaryQuery
  // If nothing is passed into IssueSummaryQuery, use default "articles"
  const orderQuery = routeQueryArrayToString(router.query.order);

  return slug ? (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ slug, order: orderQuery || order }}
    >
      {({ data }) => (
        <IssueSummaryOrderingList data={data?.collection?.ordering?.children} />
      )}
    </QueryWrapper>
  ) : null;
}

interface Props {
  order?: string;
}

const query = graphql`
  query IssueSummaryQuery($slug: Slug!, $order: String!) {
    collection(slug: $slug) {
      ordering(identifier: $order) {
        children {
          ...IssueSummaryOrderingListFragment
        }
      }
    }
  }
`;
