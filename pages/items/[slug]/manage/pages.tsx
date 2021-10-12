import React from "react";
import { graphql } from "react-relay";
import type { pagesManageSlugItemsQuery as Query } from "@/relay/pagesManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManagePages({ data: dataIgnored }: Props) {
  return <div>Item Pages</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
ManagePages.getLayout = getLayout;

export default ManagePages;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutQueryFragment
    }
  }
`;
