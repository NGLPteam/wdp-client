import CollectionList from "components/composed/collection/CollectionList";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { CollectionListQuery as Query } from "@/relay/CollectionListQuery.graphql";
import { useSearchQueryVars } from "hooks";
import { query } from "components/composed/collection/CollectionList/CollectionList";
import { LoadingPage } from "components/atomic/loading";

export default function CollectionListView() {
  const searchQueryVars = useSearchQueryVars();

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...searchQueryVars, hasQuery }}
      subscribeIds={["Collection"]}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) => queryRef && <CollectionList queryRef={queryRef} />}
    </QueryTransitionWrapper>
  );
}
