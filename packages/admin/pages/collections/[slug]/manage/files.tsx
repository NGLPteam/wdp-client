import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import FileList from "components/composed/file/FileList";
import type { filesManageSlugCollectionQuery as Query } from "@/relay/filesManageSlugCollectionQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <FileList data={collection.assets} headerStyle="secondary" />
  ) : null;
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
  query filesManageSlugCollectionQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
