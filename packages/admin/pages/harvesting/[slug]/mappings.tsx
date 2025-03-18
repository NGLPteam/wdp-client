import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import HarvestMappingsList from "components/composed/harvesting/HarvestMappingsList";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { mappingsHarvestSourceQuery as Query } from "@/relay/mappingsHarvestSourceQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceDetails({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestMappingsList data={harvestSource} />
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
      refetchTags={["harvestMappings"]}
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
HarvestSourceDetails.getLayout = getLayout;

export default HarvestSourceDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query mappingsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestSetOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
      ...HarvestMappingsListFragment
    }
  }
`;
