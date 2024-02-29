import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import type { collectionsSlugContributorsPagesQuery as Query } from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import { LoadingCircle } from "components/atomic";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars } from "hooks";

function ContributorCollectionContributions({
  queryRef,
  ...layoutProps
}: Props) {
  const { contributor } = usePreloadedQuery<Query>(query, queryRef);

  return contributor ? (
    <ContributorLayout {...layoutProps} data={contributor}>
      <CollectionContributionList
        data={contributor.collectionContributions}
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
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryTransitionWrapper>
  );
};
ContributorCollectionContributions.getLayout = getLayout;

export default ContributorCollectionContributions;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsSlugContributorsPagesQuery(
    $contributorSlug: Slug!
    $order: ContributionOrder
    $page: Int!
  ) {
    contributor(slug: $contributorSlug) {
      __typename
      ...ContributorLayoutFragment
      ... on OrganizationContributor {
        collectionContributions(page: $page, perPage: 20, order: $order) {
          ...CollectionContributionListFragment
        }
      }
      ... on PersonContributor {
        collectionContributions(page: $page, perPage: 20, order: $order) {
          ...CollectionContributionListFragment
        }
      }
    }
  }
`;
