import { ComponentType } from "react";
import { PreloadedQuery, GraphQLTaggedNode } from "react-relay";
import { OperationType } from "relay-runtime";
import { QueryTransitionWrapper } from "@wdp/lib/api/components";
import { LoadingPage } from "components/atomic";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import ContributorLayout from "components/composed/contributor/ContributorLayout";
import ErrorPage from "next/error";
import { LoadingCircle } from "components/atomic";

export default function Layout<T extends OperationType>(props: Props<T>) {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();

  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps, query, refetchTags } = props;

  return (
    <QueryTransitionWrapper<T>
      query={query}
      variables={{ ...queryVars, contributorSlug }}
      loadingFallback={<LoadingPage />}
      refetchTags={refetchTags}
    >
      {({ queryRef }) =>
        queryRef ? (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        ) : (
          <ContributorLayout>
            <LoadingCircle className="l-page-loading" />
          </ContributorLayout>
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
};

type PageProps<T extends OperationType> = {
  queryRef: PreloadedQuery<T>;
};
