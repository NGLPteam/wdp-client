import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage, LoadingCircle } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import UserLayout from "components/composed/user/UserLayout";
import ErrorPage from "next/error";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import { useViewerContext } from "contexts";
import { ModelListProps } from "components/composed/model/ModelList";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import type { LayoutUserQuery as LayoutQuery } from "@/relay/LayoutUserQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { user } = useLazyLoadQuery<LayoutQuery>(
    userQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  const { globalAdmin } = useViewerContext();

  if (!globalAdmin)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.users" />
    );

  if (!slug || !user) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
    modelName,
  } = props;

  return (
    <UserLayout data={user} showSidebar useRouteHeader={false}>
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
            <ModelListPageSkeleton modelName={modelName} />
          )
        }
      </QueryTransitionWrapper>
    </UserLayout>
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

const userQuery = graphql`
  query LayoutUserQuery($slug: Slug!) {
    user(slug: $slug) {
      ...UserLayoutFragment
    }
  }
`;
