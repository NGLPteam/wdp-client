import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import HarvestSourcesList from "components/composed/harvesting/HarvestSourcesList";
import { harvestingQuery as Query } from "@/relay/harvestingQuery.graphql";

export default function Harvesting() {
  const { page, order } = useBaseListQueryVars();

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ page, order }}
      subscribeIds={["HarvestSource"]}
      loadingFallback={<LoadingPage />}
      refetchTags={["harvestSource"]}
    >
      {({ queryRef }) =>
        queryRef ? <ListQuery queryRef={queryRef} /> : <HarvestSourcesList />
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <HarvestSourcesList data={data} />;
};

const query = graphql`
  query harvestingQuery($order: HarvestSourceOrder, $page: Int!) {
    ...HarvestSourcesListFragment
  }
`;
