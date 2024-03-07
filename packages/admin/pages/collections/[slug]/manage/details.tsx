import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import CollectionUpdateForm from "components/composed/collection/CollectionUpdateForm";
import ErrorPage from "next/error";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { AuthContextProvider } from "contexts/AuthContext";
import { LoadingPage } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import type { detailsManageSlugCollectionsPagesQuery as Query } from "@/relay/detailsManageSlugCollectionsPagesQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionDetails({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <CollectionUpdateForm data={collection} />
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
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, collectionSlug }}
      loadingFallback={<LoadingPage />}
      refetchTags={["schema"]}
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

CollectionDetails.getLayout = getLayout;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query detailsManageSlugCollectionsPagesQuery($collectionSlug: Slug!) {
    collection(slug: $collectionSlug) {
      ...CollectionLayoutFragment
      ...CollectionUpdateFormFragment
      ...AuthContextFragment
    }
  }
`;

export default CollectionDetails;
