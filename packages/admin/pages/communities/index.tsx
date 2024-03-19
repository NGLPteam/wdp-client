import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import CommunityList from "components/composed/community/CommunityList";
import type { communitiesListQuery as Query } from "@/relay/communitiesListQuery.graphql";

export default function CommunityListView() {
  const queryVars = useBaseListQueryVars({
    defaultOrder: "POSITION_ASCENDING",
  });

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={queryVars}
      subscribeIds={["Community"]}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef ? <ListQuery queryRef={queryRef} /> : <CommunityList />
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <CommunityList data={data} />;
};

const query = graphql`
  query communitiesListQuery($order: EntityOrder, $page: Int!) {
    ...CommunityListFragment
  }
`;
