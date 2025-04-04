import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import FileList from "components/composed/file/FileList";
import { AuthContextProvider } from "contexts/AuthContext";
import ItemLayout from "components/composed/item/ItemLayout";
import type { filesManageSlugItemsQuery as Query } from "@/relay/filesManageSlugItemsQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ queryRef, ...layoutProps }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} {...layoutProps}>
        <FileList data={item.assets} headerStyle="secondary" />
      </ItemLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["assets"]} {...props} />
);

ManageFiles.getLayout = getLayout;

export default ManageFiles;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query filesManageSlugItemsQuery($itemSlug: Slug!, $page: Int!) {
    item(slug: $itemSlug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
