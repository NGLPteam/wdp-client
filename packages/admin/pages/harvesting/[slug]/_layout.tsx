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
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import { RouteUnauthorizedMessage } from "components/auth/UnauthorizedMessage";
import { useViewerContext } from "contexts";
import type { LayoutHarvestSourceQuery as LayoutQuery } from "@/relay/LayoutHarvestSourceQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { harvestSource } = useLazyLoadQuery<LayoutQuery>(
    harvestSourceQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  const { globalAdmin } = useViewerContext();

  if (!globalAdmin)
    return (
      <RouteUnauthorizedMessage i18nKey="messages.unauthorized_body.harvesting" />
    );

  if (!slug || !harvestSource) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    showLoadingCircle,
    modelName,
  } = props;

  return (
    <HarvestSourceLayout data={harvestSource} {...pageComponentProps}>
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
            <ModelListPageSkeleton
              modelName={modelName}
              headerStyle="secondary"
              hideHeader
            />
          )
        }
      </QueryTransitionWrapper>
    </HarvestSourceLayout>
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

const harvestSourceQuery = graphql`
  query LayoutHarvestSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
    }
  }
`;
