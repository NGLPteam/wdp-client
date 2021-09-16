import React from "react";
import { graphql } from "react-relay";
import type { rulesManageSlugItemsQuery as Query } from "@/relay/rulesManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManageRules({ data: dataIgnored }: Props) {
  return <div>Item Rules</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
ManageRules.getLayout = getLayout;

export default ManageRules;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query rulesManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
    }
  }
`;
