import React, { ComponentProps } from "react";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { QueryLayoutProps, QueryPageComponentProps } from "types/page";
import { HasFragment } from "types/graphql-helpers";

import ErrorPage from "next/error";
import CommunityLayout from "../CommunityLayout";

function CommunityLayoutQuery<
  Query extends CommunityQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CommunityLayout>>) {
  const queryVars = useBaseListQueryVars();
  const communitySlug = useRouteSlug();
  if (!communitySlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, communitySlug }}
    >
      {({ data }) => (
        <CommunityLayout {...layoutProps} data={data?.community}>
          <PageComponent data={data} {...pageComponentProps} />
        </CommunityLayout>
      )}
    </QueryWrapper>
  );
}

type CommunityQuery = {
  readonly response: {
    community: HasFragment<"CommunityLayoutFragment"> | null;
  };
  readonly variables: { communitySlug: string };
};

export default CommunityLayoutQuery;
