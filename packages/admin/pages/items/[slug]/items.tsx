import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemLayout from "components/composed/item/ItemLayout";
import ItemList from "components/composed/item/ItemList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import { AuthContextProvider } from "contexts/AuthContext";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemChildItems({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item}>
        <ItemList
          search={item.search}
          items={item.items}
          headerStyle="secondary"
          hideHeader
        />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        itemSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={["items"]}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <ItemLayout>
            <ItemList headerStyle="secondary" hideHeader />
          </ItemLayout>
        )
      }
    </QueryTransitionWrapper>
  );
};

ItemChildItems.getLayout = getLayout;

export default ItemChildItems;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query itemsSlugItemsPagesQuery(
    $order: EntityOrder
    $page: Int!
    $predicates: [SearchPredicateInput!]
    $query: String
    $hasQuery: Boolean!
    $itemSlug: Slug!
    $schema: [String!]
  ) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
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
