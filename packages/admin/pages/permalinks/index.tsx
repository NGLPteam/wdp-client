import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import InstancePermalinksList from "components/composed/permalinks/InstancePermalinksList";
import { useBaseListQueryVars, useIsAuthorized } from "hooks";
import { LoadingPage } from "components/atomic";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import HtmlHead from "components/global/HtmlHead";
import { permalinksListQuery as Query } from "@/relay/permalinksListQuery.graphql";

export default function InstancePermalinksListView() {
  const queryVars = useBaseListQueryVars();

  const isAuthorized = useIsAuthorized({ actions: ["settings.update"] });

  if (!isAuthorized)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.settings" />
    );

  return (
    <>
      <HtmlHead />
      <QueryTransitionWrapper<Query>
        query={query}
        variables={queryVars}
        subscribeIds={["Permalink"]}
        refetchTags={["permalinks"]}
        loadingFallback={<LoadingPage />}
      >
        {({ queryRef }) =>
          queryRef ? (
            <ListQuery queryRef={queryRef} />
          ) : (
            <InstancePermalinksList />
          )
        }
      </QueryTransitionWrapper>
    </>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <InstancePermalinksList data={data} />;
};

const query = graphql`
  query permalinksListQuery($order: PermalinkOrder, $page: Int!) {
    ...InstancePermalinksListFragment
  }
`;
