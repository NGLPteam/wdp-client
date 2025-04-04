import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import type { pagesManageSlugCommunityPagesQuery as Query } from "@/relay/pagesManageSlugCommunityPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityPages({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <EntityPagesList data={community} headerStyle="secondary" />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["pages"]}
    useRouteHeader={false}
    {...props}
  />
);

CommunityPages.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader?: boolean;
};

const query = graphql`
  query pagesManageSlugCommunityPagesQuery($communitySlug: Slug!, $page: Int!) {
    community(slug: $communitySlug) {
      ...EntityPagesListFragment
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;

export default CommunityPages;
