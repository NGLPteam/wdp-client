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
import type { layoutHarvestSourceQuery as LayoutQuery } from "@/relay/layoutHarvestSourceQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { harvestSource } = useLazyLoadQuery<LayoutQuery>(
    harvestSourceQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug || !harvestSource) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

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
          ) : "modelName" in props ? (
            <ModelListPageSkeleton modelName={props.modelName} />
          ) : (
            <LoadingCircle />
          )
        }
      </QueryTransitionWrapper>
    </HarvestSourceLayout>
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

const harvestSourceQuery = graphql`
  query layoutHarvestSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
    }
  }
`;
