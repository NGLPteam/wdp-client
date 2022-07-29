import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import UserLayout from "../UserLayout";
import { FragmentWrapper, QueryWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import { HasFragment } from "types/graphql-helpers";
import type { UserLayoutQueryFragment$key } from "@/relay/UserLayoutQueryFragment.graphql";

function UserLayoutQuery<
  Query extends UserQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
  refetchTags,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof UserLayout>>) {
  const queryVars = useBaseListQueryVars();
  const userSlug = useRouteSlug();
  if (!userSlug) return <ErrorPage statusCode={404} />;

  return (
    <QueryWrapper<Query>
      query={query}
      initialVariables={{ ...queryVars, userSlug }}
      refetchTags={refetchTags}
    >
      {({ data }) => (
        <FragmentWrapper<UserLayoutQueryFragment$key>
          data={data?.user}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <UserLayout {...layoutProps} data={enhancedData}>
              <PageComponent data={data} {...pageComponentProps} />
            </UserLayout>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type UserQuery = {
  readonly response: {
    user: HasFragment<"UserLayoutQueryFragment"> | null;
  };
  readonly variables: { userSlug: string };
};

const fragment = graphql`
  fragment UserLayoutQueryFragment on User {
    ...UserLayoutFragment
  }
`;

export default UserLayoutQuery;
