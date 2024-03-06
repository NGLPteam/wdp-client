import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import FileList from "components/composed/file/FileList";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingPage } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { filesManageSlugCollectionQuery as Query } from "@/relay/filesManageSlugCollectionQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function ManageFiles({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <FileList data={collection.assets} headerStyle="secondary" />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const collectionSlug = useRouteSlug();

  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, collectionSlug }}
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

ManageFiles.getLayout = getLayout;

export default ManageFiles;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query filesManageSlugCollectionQuery($collectionSlug: Slug!, $page: Int!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...AuthContextFragment
      assets(page: $page, perPage: 20) {
        ...FileListFragment
      }
    }
  }
`;
