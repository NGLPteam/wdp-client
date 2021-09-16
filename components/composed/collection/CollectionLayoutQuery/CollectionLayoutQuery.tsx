import React, { ComponentProps } from "react";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { QueryLayoutProps, QueryPageComponentProps } from "types/page";
import { HasFragment } from "types/graphql-helpers";

import ErrorPage from "next/error";
import CollectionLayout from "../CollectionLayout";

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
        <CollectionLayout {...layoutProps} data={data?.collection}>
          <PageComponent data={data} {...pageComponentProps} />
        </CollectionLayout>
      )}
    </QueryWrapper>
  );
}

type CollectionQuery = {
  readonly response: {
    collection: HasFragment<"CollectionLayoutFragment"> | null;
  };
  readonly variables: { collectionSlug: string };
};

export default CollectionLayoutQuery;
