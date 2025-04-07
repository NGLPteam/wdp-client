import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage, LoadingCircle } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { ModelListProps } from "components/composed/model/ModelList";
import { AuthContextProvider } from "contexts/AuthContext";
import type { LayoutManageCollectionQuery } from "@/relay/LayoutManageCollectionQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();

  const slug = useRouteSlug() as string;

  const { collection } = useLazyLoadQuery<LayoutManageCollectionQuery>(
    collectionQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !collection) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
    modelName,
  } = props;

  return (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection} showSidebar useRouteHeader={false}>
        <QueryTransitionWrapper<T>
          query={query}
          variables={{ ...queryVars, slug }}
          loadingFallback={<LoadingPage />}
          refetchTags={refetchTags}
        >
          {({ queryRef }) =>
            queryRef ? (
              <PageComponent {...pageComponentProps} queryRef={queryRef} />
            ) : showLoadingCircle ? (
              <LoadingCircle className="l-page-loading" />
            ) : (
              <ModelListPageSkeleton
                modelName={modelName}
                headerStyle="secondary"
              />
            )
          }
        </QueryTransitionWrapper>
      </CollectionLayout>
    </AuthContextProvider>
  );
}

type Props<T extends OperationType> = {
  pageComponentProps: PageProps<T>;
  PageComponent: ComponentType<PageProps<T>>;
  query: GraphQLTaggedNode;
  refetchTags?: string[];
  showLoadingCircle?: boolean;
  modelName?: ModelListProps<any, any>["modelName"]; // eslint-disable-line @typescript-eslint/no-explicit-any
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};

const collectionQuery = graphql`
  query LayoutManageCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...CollectionLayoutFragment
      ...AuthContextFragment
    }
  }
`;
