import React from "react";
import { graphql } from "react-relay";
import type { accessManageSlugItemsPagesQuery as Query } from "@/relay/accessManageSlugItemsPagesQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import ItemAccessList from "components/composed/item/ItemAccessList";

function ItemAccess({ data }: Props) {
  return <ItemAccessList<Query> data={data?.item} headerStyle="secondary" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      {...props}
      useRouteHeader={false}
    />
  );
};

ItemAccess.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query accessManageSlugItemsPagesQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
      ...ItemAccessListFragment
    }
  }
`;

export default ItemAccess;
