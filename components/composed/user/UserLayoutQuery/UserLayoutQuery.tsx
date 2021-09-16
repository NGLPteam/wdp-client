import React, { ComponentProps } from "react";
import { QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type { QueryLayoutProps, QueryPageComponentProps } from "types/page";
import { HasFragment } from "types/graphql-helpers";

import ErrorPage from "next/error";
import UserLayout from "../UserLayout";

function UserLayoutQuery<
  Query extends UserQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof UserLayout>>) {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();
  if (!userSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, userSlug }}
    >
      {({ data }) => (
        <UserLayout {...layoutProps} data={data?.user}>
          <PageComponent data={data} {...pageComponentProps} />
        </UserLayout>
      )}
    </QueryWrapper>
  );
}

type UserQuery = {
  readonly response: {
    user: HasFragment<"UserLayoutFragment"> | null;
  };
  readonly variables: { userSlug: string };
};

export default UserLayoutQuery;
