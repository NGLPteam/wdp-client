import React from "react";
import { graphql } from "react-relay";
import CommunityList from "components/composed/community/CommunityList";
import { QueryWrapper } from "components/api";
import type { communitiesQuery as Query } from "__generated__/communitiesQuery.graphql";
import { useBaseListQueryVars } from "hooks";

export default function CommunityListView() {
  const queryVars = useBaseListQueryVars();

  return (
    <QueryWrapper<Query> query={query} initialVariables={queryVars}>
      {({ data }) => {
        if (!data) return null;
        return <CommunityList<Query> data={data?.communities} />;
      }}
    </QueryWrapper>
  );
}

const query = graphql`
  query communitiesQuery($order: SimpleOrder!, $page: Int!) {
    communities(order: $order, page: $page, perPage: 20) {
      ...CommunityListFragment
    }
  }
`;
