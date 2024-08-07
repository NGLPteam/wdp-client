import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserCommunitiesList from "components/composed/user/UserCommunitiesList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCommunities({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <UserLayout {...layoutProps} data={user}>
      <UserCommunitiesList data={user?.communityAccessGrants} />
    </UserLayout>
  );
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const _searchVars = useSearchQueryVars();

  if (!userSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, userSlug }}
      loadingFallback={<LoadingPage />}
      refetchTags={["allAccessGrants"]}
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
UserCommunities.getLayout = getLayout;

export default UserCommunities;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query communitiesManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      communityAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCommunitiesListFragment
      }
    }
  }
`;
