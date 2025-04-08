import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import ErrorPage from "next/error";
import { LoadingPage } from "components/atomic";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { AuthContextProvider } from "contexts/AuthContext";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import type { LayoutCommunityQuery } from "@/relay/LayoutCommunityQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const slug = useRouteSlug() as string;

  const { community } = useLazyLoadQuery<LayoutCommunityQuery>(
    communityQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !community) return <ErrorPage statusCode={404} />;

  if (!community.allowedActions.includes("self.update"))
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.community" />
    );

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <AuthContextProvider data={community}>
      <CommunityLayout data={community}>
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
      </CommunityLayout>
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

const communityQuery = graphql`
  query LayoutCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      allowedActions
      ...CommunityLayoutFragment
      ...AuthContextFragment
    }
  }
`;
