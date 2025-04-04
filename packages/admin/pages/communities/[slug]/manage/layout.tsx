import { ComponentType } from "react";
import { PreloadedQuery, GraphQLTaggedNode } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const communitySlug = useRouteSlug();

  if (!communitySlug) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    useRouteHeader,
  } = props;

  return (
    <QueryTransitionWrapper<T>
      query={query}
      variables={{ ...queryVars, ...searchQueryVars, communitySlug }}
      loadingFallback={<LoadingPage />}
      refetchTags={refetchTags}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent
            {...pageComponentProps}
            queryRef={queryRef}
            showSidebar
            useRouteHeader={useRouteHeader}
          />
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
  useRouteHeader?: boolean;
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
  showSidebar: true;
  useRouteHeader?: boolean;
};
