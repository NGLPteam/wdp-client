import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import ContributorUpdateForm from "components/composed/contributor/ContributorUpdateForm";
import { LoadingCircle } from "components/atomic";
import type { detailsSlugContributorsPagesQuery as Query } from "__generated__/detailsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ErrorPage from "next/error";

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

  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ ...queryVars, contributorSlug }}
      loadingFallback={<LoadingCircle />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryLoaderWrapper>
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
