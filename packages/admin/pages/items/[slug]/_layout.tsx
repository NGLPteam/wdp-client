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
import ItemLayout from "components/composed/item/ItemLayout";
import { AuthContextProvider } from "contexts/AuthContext";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import ItemSlugRedirect from "components/composed/item/ItemSlugRedirect";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import type { LayoutItemQuery } from "@/relay/LayoutItemQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const slug = useRouteSlug() as string;

  const { item } = useLazyLoadQuery<LayoutItemQuery>(
    itemQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !item) return <ErrorPage statusCode={404} />;

  if (!item.allowedActions.includes("self.update"))
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.item" />
    );

  if ("isIndex" in props)
    return (
      <AuthContextProvider data={item}>
        <ItemLayout data={item}>
          <ItemSlugRedirect data={item} />
        </ItemLayout>
      </AuthContextProvider>
    );

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <AuthContextProvider data={item}>
      <ItemLayout data={item}>
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
      </ItemLayout>
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

const itemQuery = graphql`
  query LayoutItemQuery($slug: Slug!) {
    item(slug: $slug) {
      allowedActions
      ...ItemLayoutFragment
      ...AuthContextFragment
      ...ItemSlugRedirectFragment
    }
  }
`;
