import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import RoleAccessList from "components/composed/role/RoleAccessList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { LoadingPage } from "components/atomic";
import type { membersManageSlugCommunitiesPagesQuery as Query } from "@/relay/membersManageSlugCommunitiesPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CommunityMembers({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <RoleAccessList
          data={community}
          headerStyle="secondary"
          header="nav.members"
          entityType="community"
        />
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
      refetchTags={["allAccessGrants", "assignedUsers"]}
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

CommunityMembers.getLayout = getLayout;

export default CommunityMembers;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query membersManageSlugCommunitiesPagesQuery(
    $communitySlug: Slug!
    $page: Int!
  ) {
    community(slug: $communitySlug) {
      ...CommunityLayoutFragment
      ...RoleAccessListFragment
      ...AuthContextFragment
    }
  }
`;
