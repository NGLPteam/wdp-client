import React from "react";
import { graphql } from "react-relay";
import type { filesManageSlugItemsQuery as Query } from "@/relay/filesManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";

function ManageFiles({ data: dataIgnored }: Props) {
  return <div> Item Files</div>;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> showSidebar query={query} {...props} />;
};
ManageFiles.getLayout = getLayout;

export default ManageFiles;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query filesManageSlugItemsQuery($itemSlug: Slug!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
    }
  }
`;
