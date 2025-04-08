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
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { AuthContextProvider } from "contexts/AuthContext";
import CommunityLayout from "components/composed/community/CommunityLayout";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { ModelListProps } from "components/composed/model/ModelList";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import type { LayoutManageCommunityQuery } from "@/relay/LayoutManageCommunityQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const slug = useRouteSlug() as string;

  const { community } = useLazyLoadQuery<LayoutManageCommunityQuery>(
    communityQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !community) return <ErrorPage statusCode={404} />;

  if (!community.allowedActions.includes("self.update"))
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.community" />
    );

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
    modelName,
  } = props;

  return (
    <AuthContextProvider data={community}>
      <CommunityLayout data={community} showSidebar useRouteHeader={false}>
        <QueryTransitionWrapper<T>
          query={query}
          variables={{ ...queryVars, ...searchQueryVars, slug }}
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
      </CommunityLayout>
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

const communityQuery = graphql`
  query LayoutManageCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      allowedActions
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;
