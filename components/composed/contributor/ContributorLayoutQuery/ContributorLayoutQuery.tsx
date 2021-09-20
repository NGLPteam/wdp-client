import React, { ComponentProps } from "react";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { QueryLayoutProps, QueryPageComponentProps } from "types/page";
import { HasFragment } from "types/graphql-helpers";

import ErrorPage from "next/error";
import ContributorLayout from "../ContributorLayout";

function ContributorLayoutQuery<
  Query extends ContributorQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof ContributorLayout>>) {
  const queryVars = useBaseListQueryVars();
  const contributorSlug = useRouteSlug();
  if (!contributorSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, contributorSlug }}
    >
      {({ data }) => (
        <ContributorLayout {...layoutProps} data={data?.contributor}>
          <PageComponent data={data} {...pageComponentProps} />
        </ContributorLayout>
      )}
    </QueryWrapper>
  );
}

type ContributorQuery = {
  readonly response: {
    contributor: HasFragment<"ContributorLayoutFragment"> | null;
  };
  readonly variables: { contributorSlug: string };
};

export default ContributorLayoutQuery;
