import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import CollectionSlugRedirect from "components/composed/collection/CollectionSlugRedirect";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { AuthContextProvider } from "contexts/AuthContext";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import type { LayoutCollectionQuery } from "@/relay/LayoutCollectionQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const slug = useRouteSlug() as string;

  const { collection } = useLazyLoadQuery<LayoutCollectionQuery>(
    collectionQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !collection) return <ErrorPage statusCode={404} />;

  if (!collection.allowedActions.includes("self.update"))
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.collection" />
    );

  if ("isIndex" in props)
    return (
      <AuthContextProvider data={collection}>
        <CollectionLayout data={collection}>
          <CollectionSlugRedirect data={collection} />
        </CollectionLayout>
      </AuthContextProvider>
    );

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <AuthContextProvider data={collection}>
      <CollectionLayout data={collection}>
        <QueryTransitionWrapper<T>
          query={query}
          variables={{
            ...queryVars,
            ...searchQueryVars,
            slug,
          }}
          loadingFallback={<LoadingPage />}
          refetchTags={refetchTags}
        >
          {({ queryRef }) =>
            queryRef ? (
              <PageComponent {...pageComponentProps} queryRef={queryRef} />
            ) : (
              <ModelListPageSkeleton headerStyle="secondary" hideHeader />
            )
          }
        </QueryTransitionWrapper>
      </CollectionLayout>
    </AuthContextProvider>
  );
}

type BaseProps<T extends OperationType> = {
  pageComponentProps: PageProps<T>;
  PageComponent: ComponentType<PageProps<T>>;
};

type ListProps<T extends OperationType> = BaseProps<T> & {
  query: GraphQLTaggedNode;
  refetchTags?: string[];
};

type IndexProps = {
  isIndex: true;
};

type Props<T extends OperationType> = IndexProps | ListProps<T>;

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};

const collectionQuery = graphql`
  query LayoutCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      allowedActions
      ...CollectionLayoutFragment
      ...AuthContextFragment
      ...CollectionSlugRedirectFragment
    }
  }
`;
