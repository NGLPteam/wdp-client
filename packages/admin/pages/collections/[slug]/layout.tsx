import { ComponentType } from "react";
import { PreloadedQuery, GraphQLTaggedNode } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ItemList from "components/composed/item/ItemList";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage, LoadingCircle } from "components/atomic";
import CollectionLayout from "components/composed/collection/CollectionLayout";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
  } = props;

  return (
    <QueryTransitionWrapper<T>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        collectionSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={refetchTags}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : showLoadingCircle ? (
          <LoadingCircle className="l-page-loading" />
        ) : (
          <CollectionLayout>
            <ItemList headerStyle="secondary" hideHeader />
          </CollectionLayout>
        )
      }
    </QueryTransitionWrapper>
  );
}

type Props<T extends OperationType> = {
  pageComponentProps: PageProps<T>;
  PageComponent: ComponentType<PageProps<T>>;
  query: GraphQLTaggedNode;
  refetchTags?: string[];
  showLoadingCircle?: boolean;
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};
