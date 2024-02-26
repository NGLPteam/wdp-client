import { graphql } from "relay-runtime";
import type { GetLayout } from "@wdp/lib/types/page";
import type { pagesManageSlugCommunityPagesQuery as Query } from "@/relay/pagesManageSlugCommunityPagesQuery.graphql";

import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import EntityPagesList from "components/composed/pages/EntityPagesList";

function CommunityPages({ data }: Props) {
  return (
    <EntityPagesList<Query> data={data?.community} headerStyle="secondary" />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <CommunityLayoutQuery<Query, Props>
      showSidebar
      query={query}
      useRouteHeader={false}
      refetchTags={["pages"]}
      {...props}
    />
  );
};

CommunityPages.getLayout = getLayout;

type Props = {
  data: Query["response"];
};

const query = graphql`
  query pagesManageSlugCommunityPagesQuery($communitySlug: Slug!, $page: Int!) {
    community(slug: $communitySlug) {
      ...EntityPagesListFragment
      ...CommunityLayoutQueryFragment
    }
  }
`;

export default CommunityPages;
