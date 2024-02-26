import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { ordersManageSlugItemsQuery as Query } from "@/relay/ordersManageSlugItemsQuery.graphql";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import EntityOrderingList from "components/composed/ordering/EntityOrderingList";

function ManageOrder({ data }: Props) {
  if (!data || !data.item) return null;
  return <EntityOrderingList<Query> data={data.item} headerStyle="secondary" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["orderings"]}
      {...props}
    />
  );
};
ManageOrder.getLayout = getLayout;

export default ManageOrder;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query ordersManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      ...EntityOrderingListFragment
    }
  }
`;
