import React from "react";
import { graphql } from "react-relay";
import type { linksManageSlugItemsQuery as Query } from "@/relay/linksManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManageLinks({ data: dataIgnored }: Props) {
  return <div> Item Links</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
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
    }
  }
`;
