import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import CollectionLayout from "../CollectionLayout";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { HasFragment } from "types/graphql-helpers";

import { CollectionLayoutQueryFragment$key } from "@/relay/CollectionLayoutQueryFragment.graphql";

function CollectionLayoutQuery<
  Query extends CollectionQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CollectionLayout>>) {
  const queryVars = useBaseListQueryVars();
  const collectionSlug = useRouteSlug();
  if (!collectionSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, collectionSlug }}
    >
      {({ data }) => (
        <FragmentWrapper<CollectionLayoutQueryFragment$key>
          data={data?.collection}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <CollectionLayout {...layoutProps} data={enhancedData}>
              <PageComponent data={data} {...pageComponentProps} />
            </CollectionLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type CollectionQuery = {
  readonly response: {
    collection: HasFragment<"CollectionLayoutQueryFragment"> | null;
  };
  readonly variables: { collectionSlug: string };
};

const fragment = graphql`
  fragment CollectionLayoutQueryFragment on Collection {
    ...CollectionLayoutFragment
  }
`;

export default CollectionLayoutQuery;
