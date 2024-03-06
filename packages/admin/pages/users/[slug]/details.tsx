import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import UserUpdateForm from "components/composed/user/UserUpdateForm";
import { LoadingCircle } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import type { detailsManageSlugUsersPagesQuery as Query } from "@/relay/detailsManageSlugUsersPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function UserDetails({ queryRef, ...layoutProps }: Props) {
  const { user } = usePreloadedQuery<Query>(query, queryRef);

  return user ? (
    <UserLayout {...layoutProps} data={user}>
      <UserUpdateForm data={user} />
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
          />
        )
      }
    </QueryLoaderWrapper>
  );
};
UserDetails.getLayout = getLayout;

export default UserDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
};

const query = graphql`
  query detailsManageSlugUsersPagesQuery($userSlug: Slug!) {
    user(slug: $userSlug) {
      ...UserUpdateFormFragment
      ...UserLayoutFragment
    }
  }
`;
