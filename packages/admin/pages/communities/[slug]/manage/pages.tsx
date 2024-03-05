import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import EntityPagesList from "components/composed/pages/EntityPagesList";
import type { pagesManageSlugCommunityPagesQuery as Query } from "@/relay/pagesManageSlugCommunityPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { LoadingPage } from "components/atomic";

function CommunityPages({ queryRef, ...layoutProps }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AuthContextProvider data={community}>
      <CommunityLayout {...layoutProps} data={community}>
        <EntityPagesList data={community} headerStyle="secondary" />
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

CommunityPages.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query pagesManageSlugCommunityPagesQuery($communitySlug: Slug!, $page: Int!) {
    community(slug: $communitySlug) {
      ...EntityPagesListFragment
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;

export default CommunityPages;
