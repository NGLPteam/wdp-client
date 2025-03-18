import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { detailsHarvestSourceQuery as Query } from "@/relay/detailsHarvestSourceQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceRecords({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <div>records list</div>
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
HarvestSourceRecords.getLayout = getLayout;

export default HarvestSourceRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsHarvestSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
    }
  }
`;
