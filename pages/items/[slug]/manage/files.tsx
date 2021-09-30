import React from "react";
import { graphql } from "react-relay";
import type { filesManageSlugItemsQuery as Query } from "@/relay/filesManageSlugItemsQuery.graphql";
import type { GetLayout } from "types/page";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import FileList from "components/composed/file/FileList";

function ManageFiles({ data }: Props) {
  return <FileList data={data?.item?.assets} headerStyle="secondary" />;
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
ManageFiles.getLayout = getLayout;

export default ManageFiles;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query filesManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
