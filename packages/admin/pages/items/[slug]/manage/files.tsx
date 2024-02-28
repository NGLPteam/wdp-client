import { graphql } from "relay-runtime";

import ItemLayoutQuery from "components/composed/item/ItemLayoutQuery";
import FileList from "components/composed/file/FileList";
import type { filesManageSlugItemsQuery as Query } from "@/relay/filesManageSlugItemsQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ data }: Props) {
  return <FileList data={data?.item?.assets} headerStyle="secondary" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <ItemLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["assets"]}
      {...props}
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
      ...ItemLayoutQueryFragment
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
