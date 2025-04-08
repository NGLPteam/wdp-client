import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugItemsQuery as Query } from "@/relay/pagesManageSlugItemsQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ManagePages({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? <EntityPagesList data={item} headerStyle="secondary" /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["pages"]} modelName="page" {...props} />
);

ManagePages.getLayout = getLayout;

export default ManagePages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query pagesManageSlugItemsQuery($slug: Slug!, $page: Int!) {
    item(slug: $slug) {
      ...EntityPagesListFragment
    }
  }
`;
