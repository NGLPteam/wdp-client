import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { usePathname } from "next/navigation";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import CollectionSlugRedirect from "components/composed/collection/CollectionSlugRedirect";
import CollectionLayout from "components/composed/collection/CollectionLayout";
import { AuthContextProvider } from "contexts/AuthContext";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { RouteHelper } from "routes";
import type { LayoutCollectionQuery } from "@/relay/LayoutCollectionQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const slug = useRouteSlug() as string;
  const path = usePathname();

  const isIndex = RouteHelper.findRouteByPath(path)?.name === "collection";

  const { collection } = useLazyLoadQuery<LayoutCollectionQuery>(
    collectionQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !collection) return <ErrorPage statusCode={404} />;

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
            ) : isIndex ? (
              <CollectionSlugRedirect data={collection} />
            ) : (
              <ModelListPageSkeleton headerStyle="secondary" hideHeader />
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
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};

const collectionQuery = graphql`
  query LayoutCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...CollectionLayoutFragment
      ...AuthContextFragment
      ...CollectionSlugRedirectFragment
    }
  }
`;
