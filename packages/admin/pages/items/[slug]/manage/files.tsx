import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import FileList from "components/composed/file/FileList";
import type { filesManageSlugItemsQuery as Query } from "@/relay/filesManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? <FileList data={item.assets} headerStyle="secondary" /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["assets"]} modelName="file" {...props} />
);

ManageFiles.getLayout = getLayout;

export default ManageFiles;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query filesManageSlugItemsQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
