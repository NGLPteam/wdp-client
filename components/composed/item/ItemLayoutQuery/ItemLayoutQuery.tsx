import React, { ComponentProps } from "react";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { QueryLayoutProps, QueryPageComponentProps } from "types/page";
import { HasFragment } from "types/graphql-helpers";

import ErrorPage from "next/error";
import ItemLayout from "../ItemLayout";

function ItemLayoutQuery<
  Query extends ItemQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof ItemLayout>>) {
  const queryVars = useBaseListQueryVars();
  const itemSlug = useRouteSlug();
  if (!itemSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, itemSlug }}
    >
      {({ data }) => (
        <ItemLayout {...layoutProps} data={data?.item}>
          <PageComponent data={data} {...pageComponentProps} />
        </ItemLayout>
      )}
    </QueryWrapper>
  );
}

type ItemQuery = {
  readonly response: {
    item: HasFragment<"ItemLayoutFragment"> | null;
  };
  readonly variables: { itemSlug: string };
};

export default ItemLayoutQuery;
