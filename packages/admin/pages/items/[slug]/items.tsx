import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import ItemList from "components/composed/item/ItemList";
import Layout from "./_layout";
import type { itemsSlugItemsPagesQuery as Query } from "__generated__/itemsSlugItemsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemChildItems({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <ItemList
      search={item.search}
      items={item.items}
      headerStyle="secondary"
      hideHeader
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["items"]} {...props} />
);

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
    $slug: Slug!
    $schema: [String!]
  ) {
    item(slug: $slug) {
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
