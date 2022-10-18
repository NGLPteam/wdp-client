import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "components/api";
import type { communitiesQuery as Query } from "__generated__/communitiesQuery.graphql";
import { useBaseListQueryVars } from "hooks";

import CommunityList from "components/composed/community/CommunityList";

export default function CommunityListView() {
  const queryVars = useBaseListQueryVars({
    defaultOrder: "POSITION_ASCENDING",
  });

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        ...queryVars,
      }}
      refetchTags={["communities"]}
    >
      {({ data }) => <CommunityList<Query> data={data?.communities} />}
    </QueryWrapper>
  );
}

const query = graphql`
  query communitiesQuery($order: EntityOrder, $page: Int!) {
    communities(order: $order, page: $page, perPage: 20) {
      ...CommunityListFragment
    }
  }
`;
