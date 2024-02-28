import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "relay-runtime";
import { GraphQLTaggedNode } from "react-relay";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { HasFragment } from "types/graphql-helpers";

import { AuthContextProvider } from "contexts/AuthContext";
import { CollectionLayoutQueryFragment$key } from "@/relay/CollectionLayoutQueryFragment.graphql";
import CollectionLayout from "../CollectionLayout";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";

function CollectionLayoutQuery<
  Query extends CollectionQuery,
  P extends QueryPageComponentProps<Query>,
>({
  query,
  refetchTags,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CollectionLayout>>) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();
  const collectionSlug = useRouteSlug();

  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  const hasQuery =
    !!searchQueryVars?.query ||
    (!!searchQueryVars?.predicates && searchQueryVars.predicates.length > 0);

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{
        ...queryVars,
        ...searchQueryVars,
        hasQuery,
        collectionSlug,
      }}
      refetchTags={refetchTags}
    >
      {({ data }) => (
        <FragmentWrapper<CollectionLayoutQueryFragment$key>
          data={data?.collection}
          fragment={fragment as GraphQLTaggedNode}
        >
          {({ enhancedData }) => (
            <AuthContextProvider data={enhancedData}>
              <CollectionLayout {...layoutProps} data={enhancedData}>
                <PageComponent data={data} {...pageComponentProps} />
              </CollectionLayout>
            </AuthContextProvider>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type CollectionQuery = {
  readonly response: {
    collection?: HasFragment<"CollectionLayoutQueryFragment"> | null;
  };
  readonly variables: { collectionSlug: string; hasQuery?: boolean };
};

const fragment = graphql`
  fragment CollectionLayoutQueryFragment on Collection {
    ...CollectionLayoutFragment
    ...AuthContextFragment
  }
`;

export default CollectionLayoutQuery;
