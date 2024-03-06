import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserCommunitiesList from "components/composed/user/UserCommunitiesList";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import type { communitiesManageSlugUsersPagesQuery as Query } from "@/relay/communitiesManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserCommunities({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? (
    <UserLayout {...layoutProps} data={user}>
      <UserCommunitiesList data={user.communityAccessGrants} />
    </UserLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();

  if (!userSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, userSlug }}
      loadingFallback={<LoadingCircle />}
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
