import { ComponentType } from "react";
import { PreloadedQuery, GraphQLTaggedNode } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import EntityLinksList from "components/composed/links/EntityLinksList";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <QueryTransitionWrapper<T>
      query={query}
      variables={{
        ...queryVars,
        itemSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={refetchTags}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={false}
          />
        ) : (
          <ItemLayout showSidebar useRouteHeader={false}>
            <EntityLinksList headerStyle="secondary" hideHeader />
          </ItemLayout>
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
  showSidebar: true;
  useRouteHeader: false;
};
