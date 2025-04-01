import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { ModelListProps } from "components/composed/model/ModelList";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import HarvestMappingLayout from "components/composed/harvesting/HarvestMappingLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { useViewerContext } from "contexts";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import type { LayoutHarvestMappingQuery as LayoutQuery } from "@/relay/LayoutHarvestMappingQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { harvestMapping } = useLazyLoadQuery<LayoutQuery>(
    harvestMappingQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  const { globalAdmin } = useViewerContext();

  if (!globalAdmin)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.harvesting" />
    );

  if (!slug || !harvestMapping) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    modelName,
    showLoadingCircle,
  } = props;

  return (
    <HarvestMappingLayout data={harvestMapping} {...pageComponentProps}>
      <QueryTransitionWrapper<T>
        query={query}
        variables={{ ...queryVars, slug }}
        loadingFallback={<LoadingCircle />}
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
    </HarvestMappingLayout>
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

const harvestMappingQuery = graphql`
  query LayoutHarvestMappingQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      ...HarvestMappingLayoutFragment
    }
  }
`;
