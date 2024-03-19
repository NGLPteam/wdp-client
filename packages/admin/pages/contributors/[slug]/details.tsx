import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { GetLayout } from "@wdp/lib/types/page";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";

function ContributorDetails({ queryRef, ...layoutProps }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <ContributorUpdateForm data={contributor} />
    </ContributorLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _searchVars = useSearchQueryVars();

  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, contributorSlug }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <ContributorLayout>
            <LoadingCircle className="l-page-loading" />
          </ContributorLayout>
        )
      }
    </QueryTransitionWrapper>
  );
};
ContributorDetails.getLayout = getLayout;

export default ContributorDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsSlugContributorsPagesQuery($contributorSlug: Slug!) {
    contributor(slug: $contributorSlug) {
      ...ContributorUpdateFormFragment
      ...ContributorLayoutFragment
    }
  }
`;
