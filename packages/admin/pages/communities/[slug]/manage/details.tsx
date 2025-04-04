import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import type { detailsManageSlugCommunitiesPagesQuery as Query } from "@/relay/detailsManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityDetails({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout data={community} {...layoutProps}>
        <CommunityUpdateForm data={community} />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} {...props} />
);

CommunityDetails.getLayout = getLayout;

export default CommunityDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
};

const query = graphql`
  query detailsManageSlugCommunitiesPagesQuery($communitySlug: Slug!) {
    community(slug: $communitySlug) {
      ...CommunityUpdateFormFragment
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;
