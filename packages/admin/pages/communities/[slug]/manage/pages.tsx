import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugCommunityPagesQuery as Query } from "@/relay/pagesManageSlugCommunityPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityPages({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <EntityPagesList data={community} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} refetchTags={["pages"]} modelName="page" {...props} />
);

CommunityPages.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query pagesManageSlugCommunityPagesQuery($slug: Slug!, $page: Int!) {
    community(slug: $slug) {
      ...EntityPagesListFragment
    }
  }
`;

export default CommunityPages;
