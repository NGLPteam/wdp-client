import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import ItemList from "components/composed/item/ItemList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import { AuthContextProvider } from "contexts/AuthContext";
import type { itemsSlugCollectionsPagesQuery as Query } from "__generated__/itemsSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionChildItems({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection}>
        <ItemList
          search={collection.search}
          items={collection.items}
          headerStyle="secondary"
          hideHeader
        />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

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
        collectionSlug,
      }}
      loadingFallback={<LoadingCircle />}
      refetchTags={["items"]}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryTransitionWrapper>
  );
};

CollectionChildItems.getLayout = getLayout;

export default CollectionChildItems;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsSlugCollectionsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $collectionSlug: Slug!
    $schema: [String!]
  ) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...AuthContextFragment
      items(order: $order, page: $page, perPage: 20) {
        ...ItemListFragment
      }
      search(visibility: ALL, maxDepth: 1) {
        ...ItemListSearchFragment
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
