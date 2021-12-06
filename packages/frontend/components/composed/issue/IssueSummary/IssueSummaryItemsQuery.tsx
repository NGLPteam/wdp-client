import React from "react";
import { QueryWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { graphql } from "react-relay";
import IssueSummaryList from "./IssueSummaryList";
import { IssueSummaryItemsQuery as Query } from "@/relay/IssueSummaryItemsQuery.graphql";

// Currently not all issues have orderings,
// so we use this list of items to some content instead of nothing
export default function IssueSummaryItemsQuery() {
  const slug = useRouteSlug();

  return slug ? (
    <QueryWrapper<Query> query={query} initialVariables={{ slug }}>
      {({ data }) => <IssueSummaryList data={data?.collection?.items} />}
    </QueryWrapper>
  ) : null;
}

const query = graphql`
  query IssueSummaryItemsQuery($slug: Slug!) {
    collection(slug: $slug) {
      items {
        ...IssueSummaryListFragment
      }
    }
  }
`;
