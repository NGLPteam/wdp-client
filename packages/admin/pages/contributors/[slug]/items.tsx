import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemContributionList from "components/composed/contribution/ItemContributionList";
import { LoadingCircle } from "components/atomic";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { itemsSlugContributorsPagesQuery as Query } from "@/relay/itemsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ContributorItemContributions({ queryRef, ...layoutProps }: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <ItemContributionList
        data={contributor?.itemContributions}
        headerStyle="secondary"
      />
    </ContributorLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();

  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, contributorSlug }}
      loadingFallback={<LoadingCircle />}
      refetchTags={["contributions"]}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryTransitionWrapper>
  );
};
ContributorItemContributions.getLayout = getLayout;

export default ContributorItemContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutFragment
      ... on OrganizationContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
      ... on PersonContributor {
        itemContributions(page: $page, perPage: 20, order: $order) {
          ...ItemContributionListFragment
        }
      }
    }
  }
`;
