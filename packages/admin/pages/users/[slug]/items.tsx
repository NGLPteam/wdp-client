import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import UserItemsList from "components/composed/user/UserItemsList";
import type { itemsManageSlugUsersPagesQuery as Query } from "@/relay/itemsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";

function UserItems({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? (
    <UserLayout {...layoutProps} data={user}>
      <UserItemsList data={user.itemAccessGrants} />
    </UserLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();

  if (!userSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
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
    </QueryLoaderWrapper>
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
