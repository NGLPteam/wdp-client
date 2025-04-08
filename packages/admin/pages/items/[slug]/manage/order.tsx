import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";
import type { ordersManageSlugItemsQuery as Query } from "@/relay/ordersManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageOrder({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <EntityOrderingList data={item} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["orderings"]}
    modelName="ordering"
    {...props}
  />
);

ManageOrder.getLayout = getLayout;

export default ManageOrder;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query ordersManageSlugItemsQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      ...EntityOrderingListFragment
    }
  }
`;
