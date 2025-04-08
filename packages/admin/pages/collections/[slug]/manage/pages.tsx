import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugCollectionsPagesQuery as Query } from "@/relay/pagesManageSlugCollectionsPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionPages({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityPagesList data={collection} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["pages"]} modelName="page" {...props} />
);

CollectionPages.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query pagesManageSlugCollectionsPagesQuery($slug: Slug!, $page: Int!) {
    collection(slug: $slug) {
      ...EntityPagesListFragment
    }
  }
`;

export default CollectionPages;
