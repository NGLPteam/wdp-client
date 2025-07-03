import { usePreloadedQuery, graphql, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useContributorQueryVars } from "hooks";
import { LoadingPage } from "components/atomic/loading";
import ContributorList from "components/composed/contributor/ContributorList";
import HtmlHead from "components/global/HtmlHead";
import { contributorsListQuery as Query } from "@/relay/contributorsListQuery.graphql";

export default function ContributorListView() {
  const contributorSearchVars = useContributorQueryVars();

  return (
    <>
      <HtmlHead />
      <QueryTransitionWrapper<Query>
        query={query}
        variables={contributorSearchVars}
        subscribeIds={["Contributor"]}
        loadingFallback={<LoadingPage />}
        refetchTags={["contributors"]}
      >
        {({ queryRef }) =>
          queryRef ? <ListQuery queryRef={queryRef} /> : <ContributorList />
        }
      </QueryTransitionWrapper>
    </>
  );
}

const ListQuery = ({ queryRef }: { queryRef: PreloadedQuery<Query> }) => {
  const data = usePreloadedQuery<Query>(query, queryRef);

  return data && <ContributorList data={data} />;
};

const query = graphql`
  query contributorsListQuery(
    $order: ContributorOrder
    $page: Int!
    $query: String
  ) {
    ...ContributorListFragment
  }
`;
