import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import HarvestAttemptsList from "components/composed/harvesting/HarvestAttemptsList";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { attemptsHarvestSourceQuery as Query } from "@/relay/attemptsHarvestSourceQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceAttempts({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestAttemptsList data={harvestSource.harvestAttempts} />
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
HarvestSourceAttempts.getLayout = getLayout;

export default HarvestSourceAttempts;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query attemptsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestAttemptOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
      harvestAttempts(order: $order, page: $page, perPage: 20) {
        ...HarvestAttemptsListFragment
      }
    }
  }
`;
