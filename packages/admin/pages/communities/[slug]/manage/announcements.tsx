import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import EntityAnnouncementsList from "components/composed/announcements/EntityAnnouncementsList";
import type { announcementsManageSlugCommunitiesPagesQuery as Query } from "@/relay/announcementsManageSlugCommunitiesPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { LoadingPage } from "components/atomic";

function CommunityAnnouncements({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <EntityAnnouncementsList data={community} headerStyle="secondary" />
      </CommunityLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const communitySlug = useRouteSlug();

  if (!communitySlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, communitySlug }}
      loadingFallback={<LoadingPage />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={false}
          />
        )
      }
    </QueryTransitionWrapper>
  );
};

CommunityAnnouncements.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query announcementsManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int
  ) {
    community(slug: $communitySlug) {
      ...EntityAnnouncementsListFragment
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;

export default CommunityAnnouncements;
