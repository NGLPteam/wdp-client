import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import HarvestSetsList from "components/composed/harvesting/HarvestSetsList";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { setsHarvestSourceQuery as Query } from "@/relay/setsHarvestSourceQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceSets({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestSetsList data={harvestSource.harvestSets} />
    </HarvestSourceLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug();
  const _searchVars = useSearchQueryVars();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, slug }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <HarvestSourceLayout>
            <LoadingCircle className="l-page-loading" />
          </HarvestSourceLayout>
        )
      }
    </QueryTransitionWrapper>
  );
};
HarvestSourceSets.getLayout = getLayout;

export default HarvestSourceSets;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query setsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestSetOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
      harvestSets(order: $order, page: $page, perPage: 20) {
        ...HarvestSetsListFragment
      }
    }
  }
`;
