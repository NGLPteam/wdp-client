import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import CommunityUpdateForm from "components/composed/community/CommunityUpdateForm";
import type { detailsManageSlugCommunitiesPagesQuery as Query } from "@/relay/detailsManageSlugCommunitiesPagesQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityDetails({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? <CommunityUpdateForm data={community} /> : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout query={query} showLoadingCircle {...props} />
);

CommunityDetails.getLayout = getLayout;

export default CommunityDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsManageSlugCommunitiesPagesQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityUpdateFormFragment
      ...AuthContextFragment
    }
  }
`;
