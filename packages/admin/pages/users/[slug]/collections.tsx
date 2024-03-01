import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import UserCollectionsList from "components/composed/user/UserCollectionsList";
import type { collectionsManageSlugUsersPagesQuery as Query } from "@/relay/collectionsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";

function UserCollections({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? (
    <UserLayout {...layoutProps} data={user}>
      <UserCollectionsList data={user.collectionAccessGrants} />
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
UserCollections.getLayout = getLayout;

export default UserCollections;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query collectionsManageSlugUsersPagesQuery(
    $userSlug: Slug!
    $order: SimpleOrder
    $page: Int!
  ) {
    user(slug: $userSlug) {
      ...UserLayoutFragment
      collectionAccessGrants(order: $order, page: $page, perPage: 20) {
        ...UserCollectionsListFragment
      }
    }
  }
`;
