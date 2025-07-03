import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useBaseListQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import HarvestSourcesList from "components/composed/harvesting/HarvestSourcesList";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import { useViewerContext } from "contexts";
import HtmlHead from "components/global/HtmlHead";
import { harvestingQuery as Query } from "@/relay/harvestingQuery.graphql";

export default function Harvesting() {
  const { page } = useBaseListQueryVars();

  const { globalAdmin } = useViewerContext();

  if (!globalAdmin)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.harvesting" />
    );

  return (
    <>
      <HtmlHead />
      <QueryTransitionWrapper<Query>
        query={query}
        variables={{ page }}
        subscribeIds={["HarvestSource"]}
        loadingFallback={<LoadingPage />}
        refetchTags={["harvestSources"]}
      >
        {({ queryRef }) =>
          queryRef ? <ListQuery queryRef={queryRef} /> : <HarvestSourcesList />
        }
      </QueryTransitionWrapper>
    </>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <HarvestSourcesList data={data} />;
};

const query = graphql`
  query harvestingQuery($page: Int!) {
    ...HarvestSourcesListFragment
  }
`;
