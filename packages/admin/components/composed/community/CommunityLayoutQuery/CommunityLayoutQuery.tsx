import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "relay-runtime";
import { GraphQLTaggedNode } from "react-relay";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { HasFragment } from "types/graphql-helpers";
import { AuthContextProvider } from "contexts/AuthContext";
import type { CommunityLayoutQueryFragment$key } from "@/relay/CommunityLayoutQueryFragment.graphql";
import CommunityLayout from "../CommunityLayout";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";

function CommunityLayoutQuery<
  Query extends CommunityQuery,
  P extends QueryPageComponentProps<Query>,
>({
  query,
  PageComponent,
  pageComponentProps,
  refetchTags,
  ...layoutProps
}: QueryLayoutProps<P, ComponentProps<typeof CommunityLayout>> & {
  initialVariables?: Query["variables"];
}) {
  const queryVars = useBaseListQueryVars();
  const searchQueryVars = useSearchQueryVars();

  const communitySlug = useRouteSlug();
  if (!communitySlug) return <ErrorPage statusCode={404} />;

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
        communitySlug,
      }}
      refetchTags={refetchTags}
    >
      {({ data }) => (
        <FragmentWrapper<CommunityLayoutQueryFragment$key>
          data={data?.community}
          fragment={fragment as GraphQLTaggedNode}
        >
          {({ enhancedData }) => (
            <AuthContextProvider data={enhancedData}>
              <CommunityLayout {...layoutProps} data={enhancedData}>
                <PageComponent data={data} {...pageComponentProps} />
              </CommunityLayout>
            </AuthContextProvider>
          )}
        </FragmentWrapper>
      )}
    </QueryWrapper>
  );
}

type CommunityQuery = {
  readonly response: {
    community?: HasFragment<"CommunityLayoutQueryFragment"> | null;
  };
  readonly variables: { communitySlug: string; hasQuery?: boolean };
};

const fragment = graphql`
  fragment CommunityLayoutQueryFragment on Community {
    ...CommunityLayoutFragment
    ...AuthContextFragment
  }
`;

export default CommunityLayoutQuery;
