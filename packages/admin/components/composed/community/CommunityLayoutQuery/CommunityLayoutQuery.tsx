import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import CommunityLayout from "../CommunityLayout";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars, useSearchQueryVars } from "hooks";
import { HasFragment } from "types/graphql-helpers";
import type { CommunityLayoutQueryFragment$key } from "@/relay/CommunityLayoutQueryFragment.graphql";
import { AuthContextProvider } from "contexts/AuthContext";

function CommunityLayoutQuery<
  Query extends CommunityQuery,
  P extends QueryPageComponentProps<Query>
>({
  query,
  PageComponent,
  pageComponentProps,
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
    >
      {({ data }) => (
        <FragmentWrapper<CommunityLayoutQueryFragment$key>
          data={data?.community}
          fragment={fragment}
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
    community: HasFragment<"CommunityLayoutQueryFragment"> | null;
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
