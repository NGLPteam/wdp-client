import { ComponentType } from "react";
import { PreloadedQuery, GraphQLTaggedNode } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import ItemLayout from "components/composed/item/ItemLayout";
import ItemList from "components/composed/item/ItemList";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <QueryTransitionWrapper<T>
      query={query}
      variables={{
        ...queryVars,
        ...searchQueryVars,
        itemSlug,
      }}
      loadingFallback={<LoadingPage />}
      refetchTags={refetchTags}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <ItemLayout>
            <ItemList headerStyle="secondary" hideHeader />
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
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};
