import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars, useRouteSlug } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import EntityHarvestRecordsList from "components/composed/harvesting/EntityHarvestRecordsList";
import { AuthContextProvider } from "contexts/AuthContext";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import type { recordsCollectionQuery as Query } from "@/relay/recordsCollectionQuery.graphql";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionRecords({ queryRef, ...layoutProps }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} {...layoutProps}>
        <EntityHarvestRecordsList data={collection} />
      </CollectionLayout>
    </AuthContextProvider>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryTransitionWrapper<Query>
      query={query}
      variables={{ slug }}
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

CollectionRecords.getLayout = getLayout;

export default CollectionRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
  showSidebar: true;
  useRouteHeader: false;
};

const query = graphql`
  query recordsCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityHarvestRecordsListFragment
      ...CollectionLayoutFragment
      ...AuthContextFragment
    }
  }
`;
