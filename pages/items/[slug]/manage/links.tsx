import React from "react";
import { graphql } from "react-relay";
import type { linksManageSlugItemsQuery as Query } from "@/relay/linksManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import EntityLinksList from "components/composed/links/EntityLinksList";
import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManageLinks({ data }: Props) {
  return (
    <EntityLinksList<Query> data={data?.item?.links} headerStyle="secondary" />
  );
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
ManageLinks.getLayout = getLayout;

export default ManageLinks;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query linksManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      links {
        ...EntityLinksListFragment
      }
    }
  }
`;
