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
import ItemLayout from "components/composed/item/ItemLayout";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { ModelListProps } from "components/composed/model/ModelList";
import { AuthContextProvider } from "contexts/AuthContext";
import type { LayoutManageItemQuery } from "@/relay/LayoutManageItemQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();

  const slug = useRouteSlug() as string;

  const { item } = useLazyLoadQuery<LayoutManageItemQuery>(
    itemQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !item) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
    modelName,
  } = props;

  return (
    <AuthContextProvider data={item}>
      <ItemLayout data={item} showSidebar useRouteHeader={false}>
        <QueryTransitionWrapper<T>
          query={query}
          variables={{
            ...queryVars,
            slug,
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
              <ModelListPageSkeleton
                modelName={modelName}
                headerStyle="secondary"
              />
            )
          }
        </QueryTransitionWrapper>
      </ItemLayout>
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

const itemQuery = graphql`
  query LayoutManageItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...ItemLayoutFragment
      ...AuthContextFragment
    }
  }
`;
