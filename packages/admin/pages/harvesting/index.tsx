import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import { harvestingQuery as Query } from "@/relay/harvestingQuery.graphql";
import HarvestSourcesList from "components/composed/harvesting/HarvestSourcesList";

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
        queryRef ? (
          <ListQuery queryRef={queryRef} />
        ) : (
          <div>a list should be here</div>
        )
      }
    </QueryTransitionWrapper>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <HarvestSourcesList data={data.harvestSources} />;
};

const query = graphql`
  query harvestingQuery($order: HarvestSourceOrder, $page: Int!) {
    harvestSources(order: $order, page: $page, perPage: 20) {
      ...HarvestSourcesListFragment
    }
  }
`;
