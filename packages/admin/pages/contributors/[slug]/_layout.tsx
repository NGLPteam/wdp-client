import { ComponentType } from "react";
import {
  PreloadedQuery,
  GraphQLTaggedNode,
  graphql,
  useLazyLoadQuery,
} from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";
import { ModelListProps } from "components/composed/model/ModelList";
import ModelListPageSkeleton from "components/composed/model/ModelListPageSkeleton";
import type { LayoutContributorQuery as LayoutQuery } from "@/relay/LayoutContributorQuery.graphql";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const slug = useRouteSlug() as string;

  const { contributor } = useLazyLoadQuery<LayoutQuery>(
    contributorQuery,
    { slug },
    { fetchPolicy: "store-or-network" },
  );

  if (!slug) return <ErrorPage statusCode={404} />;

  const {
    PageComponent,
    pageComponentProps,
    query,
    refetchTags,
    modelName,
    showLoadingCircle,
  } = props;

  return (
    <ContributorLayout data={contributor}>
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
            <ModelListPageSkeleton
              modelName={modelName}
              headerStyle="secondary"
            />
          )
        }
      </QueryTransitionWrapper>
    </ContributorLayout>
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

const contributorQuery = graphql`
  query LayoutContributorQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorLayoutFragment
    }
  }
`;
