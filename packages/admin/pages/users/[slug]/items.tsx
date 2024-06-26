import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import UserItemsList from "components/composed/user/UserItemsList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserItems({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <UserLayout {...layoutProps} data={user}>
      <UserItemsList data={user?.itemAccessGrants} />
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
UserItems.getLayout = getLayout;

export default UserItems;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query itemsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      itemAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserItemsListFragment
      }
    }
  }
`;
