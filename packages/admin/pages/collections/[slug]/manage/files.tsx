import { graphql } from "relay-runtime";

import CollectionLayoutQuery from "components/composed/collection/CollectionLayoutQuery";
import FileList from "components/composed/file/FileList";
import type { filesManageSlugCollectionQuery as Query } from "@/relay/filesManageSlugCollectionQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ data }: Props) {
  return <FileList data={data?.collection?.assets} headerStyle="secondary" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CollectionLayoutQuery<Query, Props>
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
  query filesManageSlugCollectionQuery($collectionSlug: Slug!, $page: Int!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutQueryFragment
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
