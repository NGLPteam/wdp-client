import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import { LoadingPage } from "components/atomic";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import type {
  ContributionOrder,
  collectionsSlugContributorsPagesQuery as Query,
} from "@/relay/collectionsSlugContributorsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

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
  const { order, ...queryVars } = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _searchVars = useSearchQueryVars();

  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        order: order as ContributionOrder,
        ...queryVars,
        contributorSlug,
      }}
      loadingFallback={<LoadingPage />}
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
