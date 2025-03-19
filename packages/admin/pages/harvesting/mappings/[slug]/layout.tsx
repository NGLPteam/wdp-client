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
import type { layoutHarvestMappingQuery as LayoutQuery } from "@/relay/layoutHarvestMappingQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { harvestMapping } = useLazyLoadQuery<LayoutQuery>(
    harvestMappingQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !harvestMapping) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

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
          ) : "modelName" in props ? (
            <ModelListPageSkeleton modelName={props.modelName} />
          ) : (
            <LoadingCircle />
          )
        }
      </QueryTransitionWrapper>
    </HarvestMappingLayout>
  );
}

type BaseProps<T extends OperationType> = {
  pageComponentProps: PageProps<T>;
  PageComponent: ComponentType<PageProps<T>>;
  query: GraphQLTaggedNode;
  refetchTags?: string[];
};

type ListProps<T extends OperationType> = BaseProps<T> & {
  modelName: ModelListProps<any, any>["modelName"]; // eslint-disable-line @typescript-eslint/no-explicit-any
};

type FormProps<T extends OperationType> = BaseProps<T> & {
  showLoadingCircle: true;
};

type Props<T extends OperationType> = ListProps<T> | FormProps<T>;

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};

const harvestMappingQuery = graphql`
  query layoutHarvestMappingQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      ...HarvestMappingLayoutFragment
    }
  }
`;
