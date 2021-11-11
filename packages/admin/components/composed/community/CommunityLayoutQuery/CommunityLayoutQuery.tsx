import React, { ComponentProps } from "react";
import ErrorPage from "next/error";
import { graphql } from "react-relay";
import CommunityLayout from "../CommunityLayout";
import { QueryWrapper, FragmentWrapper } from "components/api";
import { useRouteSlug, useBaseListQueryVars } from "hooks";
import type {
  QueryLayoutProps,
  QueryPageComponentProps,
} from "@wdp/lib/types/page";
import { HasFragment } from "types/graphql-helpers";
import type { CommunityLayoutQueryFragment$key } from "@/relay/CommunityLayoutQueryFragment.graphql";

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
        <FragmentWrapper<CommunityLayoutQueryFragment$key>
          data={data?.community}
          fragment={fragment}
        >
          {({ enhancedData }) => (
            <CommunityLayout {...layoutProps} data={enhancedData}>
              <PageComponent data={data} {...pageComponentProps} />
            </CommunityLayout>
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
  readonly variables: { communitySlug: string };
};

const fragment = graphql`
  fragment CommunityLayoutQueryFragment on Community {
    ...CommunityLayoutFragment
  }
`;

export default CommunityLayoutQuery;
