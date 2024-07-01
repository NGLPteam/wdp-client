import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionContributionList from "components/composed/contribution/CollectionContributionList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingPage } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { ContributionOrder } from "types/graphql-schema";
import type { contributionsManageSlugCollectionsPagesQuery as Query } from "@/relay/contributionsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionContributions({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <CollectionContributionList
          nameColumn="contributor"
          data={collection.contributions}
          headerStyle="secondary"
        />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const getLayout: GetLayout<Props> = (props) => {
  const { order, ...queryVars } = useBaseListQueryVars();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { order: searchOrder, ...searchQueryVars } = useSearchQueryVars();

  const collectionSlug = useRouteSlug();

  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        order: order as ContributionOrder,
        ...queryVars,
        ...searchQueryVars,
        collectionSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={["contributions"]}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={false}
          />
        )
      }
    </QueryTransitionWrapper>
  );
};

CollectionContributions.getLayout = getLayout;

const query = graphql`
  query contributionsManageSlugCollectionsPagesQuery(
    $collectionSlug: Slug!
    $page: Int!
    $order: ContributionOrder
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...AuthContextFragment
      contributions(page: $page, perPage: 20, order: $order) {
        ...CollectionContributionListFragment
      }
    }
  }
`;

export default CollectionContributions;
