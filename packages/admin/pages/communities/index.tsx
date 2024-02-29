import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import CommunityList from "components/composed/community/CommunityList";
import { query } from "components/composed/community/CommunityList/CommunityList";
import type { CommunityListQuery as Query } from "@/relay/CommunityListQuery.graphql";

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
      {({ queryRef }) => queryRef && <CommunityList queryRef={queryRef} />}
    </QueryTransitionWrapper>
  );
}
