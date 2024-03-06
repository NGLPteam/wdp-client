import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { collectionsSlugCommunitiesPagesQuery as Query } from "__generated__/collectionsSlugCommunitiesPagesQuery.graphql";
import CollectionList from "components/composed/collection/CollectionList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { AuthContextProvider } from "contexts/AuthContext";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityChildCollections({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout data={community}>
        <CollectionList
          collections={community.collections}
          search={community.search}
          headerStyle="secondary"
          hideHeader
        />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const communitySlug = useRouteSlug();
  if (!communitySlug) return <ErrorPage statusCode={404} />;

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        hasQuery,
        communitySlug,
      }}
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
CommunityChildCollections.getLayout = getLayout;

export default CommunityChildCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query collectionsSlugCommunitiesPagesQuery(
    $order: EntityOrder
    $page: Int!
    $communitySlug: Slug!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $schema: [String!]
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
      ...AuthContextFragment
      collections(order: $order, page: $page, perPage: 20) {
        ...CollectionListFragment
      }
      search(visibility: ALL, maxDepth: 1) {
        ...CollectionListSearchFragment
          @arguments(
            query: $query
            page: $page
            predicates: $predicates
            order: $order
            hasQuery: $hasQuery
            schema: $schema
          )
      }
    }
  }
`;
